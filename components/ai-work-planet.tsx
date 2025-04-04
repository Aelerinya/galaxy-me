import PlanetWrapper from "./planet-wrapper";
import PlanetLink from "./planet-link";

interface AIWorkPlanetProps {
  title: string;
  description: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  baseColor: "tech-blue" | "warm-sun" | "relationship-purple" | "idea-green";
  darkColor: "deep-blue" | "sunset-orange" | "deep-purple" | "forest-green";
  links: Array<{
    label: string;
    url?: string;
    iconUrl?: string;
    isSectionHeader?: boolean;
    action?: string;
  }>;
  size?: "medium" | "large";
}

export default function AIWorkPlanet({
  title,
  description,
  position,
  baseColor,
  darkColor,
  links,
  size = "large",
}: AIWorkPlanetProps) {
  // Map color names to actual color values for PlanetLink
  const baseColorMap = {
    "tech-blue": "from-[#0098DA]",
    "warm-sun": "from-[#F9A826]",
    "relationship-purple": "from-[#9656A1]",
    "idea-green": "from-[#06D6A0]",
  };

  const darkColorMap = {
    "deep-blue": "to-[#01487E]",
    "sunset-orange": "to-[#F46036]",
    "deep-purple": "to-[#4B2E83]",
    "forest-green": "to-[#099873]",
  };

  return (
    <PlanetWrapper
      position={position}
      baseColor={baseColor}
      darkColor={darkColor}
      size={size}
    >
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-lg mb-8 text-starlight-white/90">{description}</p>

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
                baseColor={baseColorMap[baseColor]}
                darkColor={darkColorMap[darkColor]}
              />
            ))}
          </div>
        </div>
      </div>
    </PlanetWrapper>
  );
}
