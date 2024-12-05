"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem, SkeletonSix } from "./ui/BentoGrid";
// import { GridItems } from "../index";

import {
  IconMeeple,
  IconSchool,
  IconBriefcase2,
  IconDeviceDesktop,
  IconPingPong,
} from "@tabler/icons-react";

export function Grid() {
  return (
    <div id="about" className="bg-white dark:bg-black-100 bg-grid-black-100/[0.02] dark:bg-grid-white/[0.05] py-4">
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {GridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

const GridItems = [
  {
    title: "About me",
    description: (
      <span className="text-sm">
        Computing graduate keen on problem solving.
      </span>
    ),
    header: <SkeletonSix src="https://media.licdn.com/dms/image/v2/C5603AQE-oL6-wzr7gg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1642847698546?e=1737590400&v=beta&t=YLOJoxwG8m4YqtwiY8r96vFbjTQSRaGxyh0K4qauXOM" alt="Chen Hongpo"/>,
    className: "md:col-span-1",
    icon: <IconMeeple className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Education",
    description: (
      <span className="text-sm">
        Bachelors of Computing at Nanyang Technological University.
      </span>
    ),
    header: <SkeletonSix src="https://images.squarespace-cdn.com/content/v1/58ac54992e69cfa96ffb2fee/1572428895518-9G3QQ02FOTM654QH3KD2/NTU+Learning+Hub+Hive+33%2C+image+by+Andrew+Campbell+Nelson.jpg?format=2500w" alt="Nanyang Technological University"/>,
    className: "md:col-span-1",
    icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Skills",
    description: (
      <span className="text-sm">
        Bunch.
      </span>
    ),
    header: <SkeletonSix src="https://i.imgur.com/9MQ9YiW.jpeg" alt="My skills"/>,
    className: "md:col-span-1",
    icon: <IconDeviceDesktop className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Work Experience",
    description: (
      <span className="text-sm">
        Data Engineering Intern - Amplified Industries Inc.<br />
        AI Software Engineering Intern - cynapse ptd ltd.
      </span>
    ),
    header: <SkeletonSix src="https://i.imgur.com/QJnd3FN.jpeg" alt="My work"/>,
    className: "md:col-span-2",
    icon: <IconBriefcase2 className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Other Hobbies",
    description: (
      <span className="text-sm">
        Photography. Sports. Music.
      </span>
    ),
    header: <SkeletonSix src="https://i.imgur.com/tbvssPh.jpeg" alt="My hobbies"/>,
    className: "md:col-span-1",
    icon: <IconPingPong className="h-4 w-4 text-neutral-500" />,
  },
];

export default Grid