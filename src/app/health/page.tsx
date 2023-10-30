import { Button } from '@/components/ui/button'
import { GraduationCap, Pencil } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const route = (props: Props) => {
  return (
    <div className='antialiased mt-2 p-4 gap-4 min-h-screen grid place-items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
      <div className="text-black flex justify-start items-start h-full p-4 text-center rounded-md border-2 text-4xl md:text-4xl font-semibold bg-gradient-to-r grainy from-green-100 to-blue-100">
        <div className='w-full'>
          <Image
          src={'https://aarambhindia.org/wp-content/uploads/2017/09/20161103_pubertygraphic_p01.png__800x600_q75_subsampling-2.png'}
          className="object-fill w-full max-h-[300px] rounded-t-lg"
          width={200}
          height={200}
          alt="puberty"
          />
          <h1 className='font-semibold mt-2 text-center text-slate-700'>
            Puberty
          </h1>
          <h2 className="font-semibold mt-2 text-xl text-start text-slate-700">
          Adolescence ushers in a natural metamorphosis, recognized as puberty, involving physical and hormonal changes. This phase witnesses the development of secondary sexual attributes and signifies the substantial transition from childhood to adulthood.
          </h2>
          <div className='flex gap-4 items-center justify-center'>
          <Link href="https://www.medicalnewstoday.com/articles/156451#what-happens">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-blue-400 to-pink-500'>
              Learn More <GraduationCap className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          <Link href="/dashboard">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-amber-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-amber-400 to-pink-500'>
              Note Down <Pencil className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          </div>
        </div>
      </div>
      <div className="text-black flex justify-start items-start h-full p-4 text-center rounded-md border-2 text-4xl md:text-4xl font-semibold bg-gradient-to-r grainy from-green-100 to-blue-100">
        <div className='w-full'>
          <Image
          src={'https://i.ibb.co/L64pNDR/sti.png'}
          className="object-fill w-full max-h-[300px] rounded-t-lg"
          width={200}
          height={200}
          alt="puberty"
          />
          <h1 className='font-semibold mt-2 text-center text-slate-700'>
          STI
          </h1>
          <h2 className="font-semibold mt-2 text-xl text-start text-slate-700">
          Sexually transmitted infections (STIs) refer to contagious diseases transmitted through sexual contact, conditions like chlamydia, and HIV. STIs may lead to significant health complications, demanding medical attention and the practice of safe sexual methods for prevention.
          </h2>
          <div className='flex gap-4 items-center justify-center'>
          <Link href="https://www.medicalnewstoday.com/articles/sexually-transmitted-diseases">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-blue-400 to-pink-500'>
              Learn More <GraduationCap className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          <Link href="/dashboard">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-amber-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-amber-400 to-pink-500'>
              Note Down <Pencil className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          </div>
        </div>
      </div>
      <div className="text-black flex justify-start items-start h-full p-4 text-center rounded-md border-2 text-4xl md:text-4xl font-semibold bg-gradient-to-r grainy from-green-100 to-blue-100">
        <div className='w-full'>
          <Image
          src={'https://i.ibb.co/zfb2HHh/tampon.png'}
          className="object-fill w-full max-h-[300px] rounded-t-lg"
          width={200}
          height={200}
          alt="puberty"
          />
          <h1 className='font-semibold mt-2 text-center text-slate-700'>
          Tampon
          </h1>
          <h2 className="font-semibold mt-2 text-xl text-start text-slate-700">
          Tampons serve as menstrual hygiene products utilized during a woman's period. They are inserted into the vaginal canal to absorb menstrual blood, providing both convenience and comfort. Various absorbency levels are available to cater to individual requirements.
          </h2>
          <div className='flex gap-4 items-center justify-center'>
          <Link href="https://www.medicalnewstoday.com/articles/how-to-put-in-a-tampon-for-beginners-tampon-types-and-more#:~:text=What%20is%20a%20tampon%3F&text=A%20tampon%20is%20a%20menstrual,blood%20flow%20during%20a%20period.">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-blue-400 to-pink-500'>
              Learn More <GraduationCap className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          <Link href="/dashboard">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-amber-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-amber-400 to-pink-500'>
              Note Down <Pencil className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          </div>
        </div>
      </div>
      <div className="text-black flex justify-start items-start h-full p-4 text-center rounded-md border-2 text-4xl md:text-4xl font-semibold bg-gradient-to-r grainy from-green-100 to-blue-100">
        <div className='w-full'>
          <Image
          src={'https://i.ibb.co/6txQbmB/a609dc4fe925822d2debb825a34bf5d0-removebg-preview.png'}
          className="object-fill w-full max-h-[300px] rounded-t-lg"
          width={200}
          height={200}
          alt="puberty"
          />
          <h1 className='font-semibold mt-2 text-center text-slate-700'>
          BirthControl
          </h1>
          <h2 className="font-semibold mt-2 text-xl text-start text-slate-700">
          Contraception/birth control, entails a range of methods and tools used to prevent pregnancy. Includes hormonal options like oral contraceptives, patches, and (IUDs), as well as barrier methods, sterilization procedures, and fertility awareness techniques.
          </h2>
          <div className='flex gap-4 items-center justify-center'>
          <Link href="https://www.medicalnewstoday.com/articles/290196">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-blue-400 to-pink-500'>
              Learn More <GraduationCap className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          <Link href="/dashboard">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-amber-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-amber-400 to-pink-500'>
              Note Down <Pencil className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          </div>
        </div>
      </div>
      <div className="text-black flex justify-start items-start h-full p-4 text-center rounded-md border-2 text-4xl md:text-4xl font-semibold bg-gradient-to-r grainy from-green-100 to-blue-100">
        <div className='w-full'>
          <Image
          src={'https://i.ibb.co/VwtJPxZ/gi.png'}
          className="object-fill w-full max-h-[300px] rounded-t-lg"
          width={200}
          height={200}
          alt="puberty"
          />
          <h1 className='font-semibold mt-2 text-center text-slate-700'>
          Gender Identity

          </h1>
          <h2 className="font-semibold mt-2 text-xl text-start text-slate-700">
          Gender identity is an intimate, individual perception of being male, female, a fusion of both, or none at all. This identity may not necessarily correspond to one's assigned sex at birth, underscoring the significance of respecting individual identities.
          </h2>
          <div className='flex gap-4 items-center justify-center'>
          <Link href="https://www.medicalnewstoday.com/articles/types-of-gender-identity">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-blue-400 to-pink-500'>
              Learn More <GraduationCap className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          <Link href="/dashboard">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-amber-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-amber-400 to-pink-500'>
              Note Down <Pencil className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          </div>
        </div>
      </div>
      <div className="text-black flex justify-start items-start h-full p-4 text-center rounded-md border-2 text-4xl md:text-4xl font-semibold bg-gradient-to-r grainy from-green-100 to-blue-100">
        <div className='w-full'>
          <Image
          src={'https://i.ibb.co/WzgYVb7/hi.png'}
          className="object-fill w-full max-h-[300px] rounded-t-lg"
          width={200}
          height={200}
          alt="puberty"
          />
          <h1 className='font-semibold mt-2 text-center text-slate-700'>
          Hormonal Imbalance
          </h1>
          <h2 className="font-semibold mt-2 text-xl text-start text-slate-700">
          Hormonal imbalance pertains to disruptions in hormone production and control, potentially giving rise to a range of health concerns, such as mood fluctuations, alterations in weight, and irregularities in menstruation, often necessitating medical assistance.
          </h2>
          <div className='flex gap-4 items-center justify-center'>
          <Link href="https://www.medicalnewstoday.com/articles/321486">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-blue-400 to-pink-500'>
              Learn More <GraduationCap className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          <Link href="/dashboard">
          <Button className='text-white mt-3 hover:bg-gradient-to-br hover:from-amber-500 hover:to-pink-600 text-base px-4 py-6 bg-gradient-to-br from-amber-400 to-pink-500'>
              Note Down <Pencil className='w-6 h-6 ml-2'/>
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default route