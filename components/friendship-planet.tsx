import PlanetWrapper from "./planet-wrapper";
import PlanetLink from "./planet-link";

interface FriendshipPlanetProps {
  title: string;
  description: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  baseColor: "tech-blue" | "warm-sun" | "relationship-purple" | "idea-green";
  darkColor: "deep-blue" | "sunset-orange" | "deep-purple" | "forest-green";
  links: Array<{
    label: string;
    url?: string;
    iconUrl?: string;
    action?: string;
  }>;
  size?: "medium" | "large";
}

export default function FriendshipPlanet({
  title,
  description,
  position,
  baseColor,
  darkColor,
  links,
  size = "large",
}: FriendshipPlanetProps) {
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

        <div className="flex flex-wrap justify-center gap-6 max-w-[280px] mx-auto">
          {links.map((link, index) => (
            <PlanetLink
              key={index}
              label={link.label}
              url={link.url}
              iconUrl={link.iconUrl}
              action={link.action}
              baseColor={`from-[${baseColor}]`}
              darkColor={`to-[${darkColor}]`}
            />
          ))}
        </div>
      </div>
    </PlanetWrapper>
  );
}
