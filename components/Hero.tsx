import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ModeToggle } from "./ThemeProvider"


const Hero = () => {
  return (
    <div className="pb-64 pt-32" id="home">
        <div>
        <Spotlight
            className="-top-20 -left-20 md:-left-40 md:-top-40 h-[100vh]"
            fill="teal"
            fillDark="white"
        />
        <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="magenta"
            fillDark="purple"
        />
        <Spotlight 
            className="left-1/2 top-50 h-[100vh] w-[65vw]" 
            fill="yellow"
            fillDark="blue" 
        />
        </div> 
            <div
            className="h-screen w-full 
                bg-white dark:bg-black-100
                bg-grid-black-100/[0.007]   
                dark:bg-grid-white/[0.03]
                absolute top-0 left-0 flex items-center justify-center"
            >
            {/* Improved gradient overlay */}
            <div
                className="absolute pointer-events-none inset-0 
                flex items-center justify-center 
                dark:bg-black-100 bg-white 
                [mask-image:radial-gradient(ellipse_at_center,transparent_25%,white)]"
            />
            </div>

            <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-black-100 max-w-80">
                Welcome to my portfolio
            </p>

            <TextGenerateEffect
                words="Solving problems, one at a time"
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-black dark:text-white">
                Hi! I&apos;m Hongpo, a fresh college graduate based in Singapore.
            </p>

            <a href="#about">
                <MagicButton 
                title="About me"
                icon={<FaLocationArrow />}
                position="right"
                />
            </a>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
            <ModeToggle />
            </div>
        </div>
    </div>
  );
};

export default Hero