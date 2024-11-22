// Projects.tsx
import React from 'react';
import { PinContainer } from './ui/3DPin';
import { ProjItems } from '../index';
import Image from 'next/image';

export function Projects() {
  return (
    <div
      id="projects"
      className="h-[40rem] w-full flex items-center justify-start bg-white dark:bg-black-100 bg-grid-black-100/[0.02] dark:bg-grid-white/[0.05] transition-colors duration-300 overflow-x-auto space-x-4 pb-4 scroll-smooth"
    >
      {ProjItems.map((item, index) => (
        <div
          className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          key={index}
        >
          <PinContainer title={item.title} href={item.href}>
            <div className="flex flex-col p-4 tracking-tight text-gray-900 dark:text-slate-100 w-[20rem] h-[20rem] bg-white/80 dark:bg-black/80 backdrop-blur-sm">
              <h3 className="font-bold text-base text-gray-900 dark:text-slate-100 mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-600 dark:text-slate-500">
                {item.description}
              </p>
              <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={`${item.heading} preview`}
                  width={320}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
}

export default Projects;