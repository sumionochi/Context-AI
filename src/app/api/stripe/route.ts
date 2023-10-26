import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

const settingUrl = process.env.NEXTAUTH_URL + '/settings'

export async function  GET() {
    try{
        const session = await getAuthSession();
        if(!session?.user){
            return new NextResponse("unauthorised", {status: 401});
        }

        const userSub = await prisma.userSubscription.findUnique({
            where: {
                userId: session.user.id
            }
        })

        if(userSub && userSub.stripeCustomerId){
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSub.stripeCustomerId,
                return_url: settingUrl
            })
            return NextResponse.json({url: stripeSession.url})
        }

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: settingUrl,
            cancel_url: settingUrl,
            payment_method_types: ['card'],
            mode: 'subscription',
            billing_address_collection: 'auto',
            customer_email: session.user.email ?? '',
            line_items: [
                {
                    price_data: {
                        currency: "INR",
                        product_data: {
                            name: "Course AI",
                            description: "Unlimited Course Generation"
                        },
                        unit_amount: 69900,
                        recurring: {
                            interval: "month",
                        }
                    },
                    quantity: 1
                }
            ],
            metadata: {
                userId: session.user.id,
            }
    })
    return NextResponse.json({url: stripeSession.url});


    }catch(error){
        // cancel at billing portal 
        console.log("[STRIPE ERROR]", error);
        return new NextResponse("internal server error", {status: 500});
    }
}