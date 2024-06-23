"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import * as FAIcons from "react-icons/fa"; // Import Font Awesome icons
import * as DIIcons from "react-icons/di"; // Import Devicons
import * as BsIcons from "react-icons/bs"; // Import Bootstrap icons
import * as RiIcons from "react-icons/ri"; // Import Remix icons
import * as SiIcons from "react-icons/si"; // Import Simple Icons

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icon?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "20s"; // Default fast speed

      if (speed === "normal") {
        duration = "40s";
      } else if (speed === "slow") {
        duration = "80s";
      }

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:animation-play-state:paused"
        )}
      >
        {items.map((item, index) => {
          let IconComponent = null;
          let iconColorClass = "text-white";

          // Determine which icon library to use and assign color based on icon type
          if (item.icon && item.icon.startsWith("Fa")) {
            IconComponent = FAIcons[item.icon as keyof typeof FAIcons];
            // Assigning colors based on specific icon types
            if (item.icon === "FaHtml5") {
              iconColorClass = "text-red-500"; // HTML icon color
            } else if (item.icon === "FaReact") {
              iconColorClass = "text-blue-500"; // React icon color
            } else if (item.icon === "FaNodeJs") {
              iconColorClass = "text-green-500"; // Node.js icon color
            }
          } else if (item.icon && item.icon.startsWith("Di")) {
            IconComponent = DIIcons[item.icon as keyof typeof DIIcons];
            // Assigning colors based on specific icon types
            if (item.icon === "DiJavascript1") {
              iconColorClass = "text-yellow-500"; // JavaScript icon color
            } else if (item.icon === "DiCss3") {
              iconColorClass = "text-indigo-500"; // CSS icon color
            } else if (item.icon === "DiMongodb") {
              iconColorClass = "text-green-500"; // MongoDB icon color
            }
          } else if (item.icon && item.icon.startsWith("Bs")) {
            IconComponent = BsIcons[item.icon as keyof typeof BsIcons];
            // Assigning colors based on specific icon types (Bootstrap icons)
            if (item.icon === "BsFiletypeSql") {
              iconColorClass = "text-purple-500"; // SQL icon color
            }
          } else if (item.icon && item.icon.startsWith("Ri")) {
            IconComponent = RiIcons[item.icon as keyof typeof RiIcons];
            // Assigning colors based on specific icon types (Remix icons)
            if (item.icon === "RiTailwindCssFilll") {
              iconColorClass = "text-cyan-500"; // Tailwind CSS icon color
            }
          } else if (item.icon && item.icon.startsWith("Si")) {
            IconComponent = SiIcons[item.icon as keyof typeof SiIcons];
            // Assigning colors based on specific icon types (Simple Icons)
            if (item.icon === "SiNextdotjs") {
              iconColorClass = "text-gray-500"; // Next.js icon color
            }
          }

          return (
            <li
              key={index}
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="relative z-20 mt-6 flex flex-col items-center">
                  {IconComponent && (
                    <IconComponent className={`text-7xl ${iconColorClass} mb-4`} />
                  )}
                  <span className="text-2xl leading-[1.6] text-gray-400 font-bold">
                    {item.name}
                  </span>
                </div>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
