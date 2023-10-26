import GalleryCourseCard from '@/components/GalleryCourseCard';
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';

import React from 'react';

type Props = {};

const gallery = async (props: Props) => {
  const courses = await prisma.course.findMany({
    include: {
      units: {
        include: { chapters: true },
      },
    },
  });
  const session = await getAuthSession();
  {if(!session?.user){redirect('/display')}}
  return (
    <div className="py-8 mx-auto max-w-7xl">
      <div className="grid place-items-start grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {session?.user && courses.map((course) => (
            <GalleryCourseCard course={course} key={course.id} />
          ))}   
      </div>
    </div>
  );
};

export default gallery;
