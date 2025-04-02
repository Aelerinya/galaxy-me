import PlanetWrapper from "./planet-wrapper";
import PlanetLink from "./planet-link";

interface ContactPlanetProps {
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

export default function ContactPlanet({
  title,
  description,
  position,
  baseColor,
  darkColor,
  links,
  size = "large",
}: ContactPlanetProps) {
  return (
    <PlanetWrapper
      position={position}
      baseColor={baseColor}
      darkColor={darkColor}
      size={size}
    >
      <div className="text-center w-full">
        <h3 className="text-3xl font-bold mb-3">{title}</h3>
        <p className="text-base mb-6 text-starlight-white/90">{description}</p>

        <div className="grid grid-cols-1 gap-4 w-full max-w-[80%] mx-auto">
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
