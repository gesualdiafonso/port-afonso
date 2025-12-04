import { twMerge } from "tailwind-merge";
import React from "react";

interface OrbitingCirclesProps {
    className?: string; // Tornamos OPCIONAL com '?'
    children: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    radius?: number;
    path?: boolean;
    iconSize?: number;
    speed?: number;
    [key: string]: any; // Permite props adicionais (como as props do div)
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 24,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            } as React.CSSProperties & Record<string, any>}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full ${
                reverse ? "[animation-direction:reverse]" : ""
              }`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
