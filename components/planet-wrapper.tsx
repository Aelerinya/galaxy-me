import { ReactNode } from "react";

type PlanetPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type PlanetColors =
  | "tech-blue"
  | "warm-sun"
  | "relationship-purple"
  | "idea-green";
type PlanetDarkColors =
  | "deep-blue"
  | "sunset-orange"
  | "deep-purple"
  | "forest-green";

interface PlanetWrapperProps {
  position: PlanetPosition;
  baseColor: PlanetColors;
  darkColor: PlanetDarkColors;
  size?: "medium" | "large";
  children: ReactNode;
}

export default function PlanetWrapper({
  position,
  baseColor,
  darkColor,
  size = "medium",
  children,
}: PlanetWrapperProps) {
  // Position classes
  const positionClasses = {
    "top-left": "top-8 left-8",
    "top-right": "top-8 right-8",
    "bottom-left": "bottom-8 left-8",
    "bottom-right": "bottom-8 right-8",
  };

  // Color classes
  const baseColorClasses = {
    "tech-blue": "from-[#0098DA]",
    "warm-sun": "from-[#F9A826]",
    "relationship-purple": "from-[#9656A1]",
    "idea-green": "from-[#06D6A0]",
  };

  const darkColorClasses = {
    "deep-blue": "to-[#01487E]",
    "sunset-orange": "to-[#F46036]",
    "deep-purple": "to-[#4B2E83]",
    "forest-green": "to-[#099873]",
  };

  // Size classes
  const sizeClasses = {
    medium: "w-80 h-80",
    large: "w-96 h-96",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} z-10`}
      data-planet="true"
    >
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${baseColorClasses[baseColor]} ${darkColorClasses[darkColor]} p-1`}
      >
        <div className="w-full h-full rounded-full bg-space-blue/80 flex flex-col items-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
