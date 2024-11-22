"use client";
import React from 'react'
import { useTheme } from "next-themes";

const MagicButton = ({
  title,
  icon,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  const { resolvedTheme } = useTheme();

  // Determine colors based on the theme
  const bgColor = resolvedTheme === "light" ? "bg-white" : "bg-slate-950";
  const textColor = resolvedTheme === "light" ? "text-black" : "text-white";

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${otherClasses}`}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className={`inline-flex h-full w-full items-center justify-center rounded-full ${bgColor} px-3 py-1 text-sm font-medium ${textColor} backdrop-blur-3xl`}
      >
        {title}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  );
};

export default MagicButton;