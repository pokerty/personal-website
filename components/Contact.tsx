"use client";

import React, { useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { ContactItems } from "../index";
import MagicButton from "./ui/MagicButton";
import { FaCopy } from "react-icons/fa";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("chenhongpo@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div
      id="contact"
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-100 bg-grid-black-100/[0.02] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards
        items={ContactItems}
        direction="right"
        speed="normal"
      />
      <div className="mt-8">
        <MagicButton
          title={copied ? "Email Copied!" : "Let's Collaborate!"}
          icon={<FaCopy />}
          handleClick={copyToClipboard}
        />
      </div>
    </div>
  );
}

export default Contact;