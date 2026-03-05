"use client";

import { cn } from "../lib/utils";
import { AnimatedList } from "../Layouts/AnimatedList";
import { User } from "lucide-react";

let notifications = [
  {
    name: "Solar Flair Zimbabwe",
    description: "Danler Always Delivers 🔥🔥",
    time: "15m ago",
    icon: User,
    color: "#00C9A7",
  },

  {
    name: "Muzukuru Funeral Streaming",
    description: "Keep up the great work",
    time: "5m ago",
    icon: User,
    color: "#FF3D71",
  },
  {
    name: "Mineral Marven Ltd",
    description: "Your designs are slick and you deliver on time keep it up.",
    time: "2m ago",
    icon: User,
    color: "#1E86FF",
  },
  {
    name: "Derf Corp",
    description: "You Guys are the best at your work",
    time: "10m ago",
    icon: User,
    color: "#FFB800",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  const Icon = icon;

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <Icon className="text-white w-5 h-5" />
        </div>

        <div className="flex flex-col overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-medium">{name}</span>
            <span className="text-xs text-gray-500">· {time}</span>
          </div>

          <p className="text-sm text-gray-500 ">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
