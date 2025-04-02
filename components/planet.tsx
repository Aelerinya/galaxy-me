"use client";

import PlanetLink from "./planet-link";

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

interface PlanetLink {
  label: string;
  url?: string;
  iconUrl?: string;
  isSectionHeader?: boolean;
  action?: string;
}

interface PlanetProps {
  title: string;
  description: string;
  position: PlanetPosition;
  baseColor: PlanetColors;
  darkColor: PlanetDarkColors;
  links: PlanetLink[];
  size?: "medium" | "large";
}

export default function Planet({
  title,
  description,
  position,
  baseColor,
  darkColor,
  links,
  size = "medium",
}: PlanetProps) {
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

  const titleSizeClasses = {
    medium: "text-2xl",
    large: "text-3xl",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} z-10`}
      data-planet="true"
    >
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${baseColorClasses[baseColor]} ${darkColorClasses[darkColor]} p-1`}
      >
        <div className="w-full h-full rounded-full bg-space-blue/80 flex flex-col items-center justify-center p-4 text-center">
          <h3 className={`${titleSizeClasses[size]} font-bold mb-1`}>
            {title}
          </h3>
          <p className="text-sm mb-3 text-starlight-white/90">{description}</p>

          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex flex-wrap justify-center gap-2 w-full">
              {links.map((link, index) => (
                <PlanetLink
                  key={index}
                  label={link.label}
                  url={link.url}
                  iconUrl={link.iconUrl}
                  isSectionHeader={link.isSectionHeader}
                  action={link.action}
                  baseColor={baseColorClasses[baseColor]}
                  darkColor={darkColorClasses[darkColor]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
