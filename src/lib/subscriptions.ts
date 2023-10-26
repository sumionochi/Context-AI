/* The code you provided is a TypeScript function named `subCheck`. Here is a breakdown of what it
does: */
import { isValid } from "zod";
import { getAuthSession } from "./auth";
import { prisma } from "./db";

const DAY_IN_MS = 1000 *60 *60 *24;

export const subCheck =async()=>{
    const session = await getAuthSession()
    if(!session?.user){
        return false
    }
    const subUser = await prisma.userSubscription.findUnique({
        where: {
            userId: session.user.id
        }
    })
    if(!subUser){
        return false
    }

    const invalid = subUser.stripePriceId && subUser.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();
    return !!isValid;
}