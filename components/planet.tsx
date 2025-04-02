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
  url: string;
  iconUrl?: string;
  isSectionHeader?: boolean;
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
              {links.map((link, index) =>
                link.isSectionHeader ? (
                  <div key={index} className="w-full">
                    <div className="text-sm font-semibold text-starlight-white/90 mt-4 mb-2 w-full text-center">
                      {link.label}
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-starlight-white/20 to-transparent mb-2" />
                  </div>
                ) : (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${baseColorClasses[baseColor]} ${darkColorClasses[darkColor]} hover:opacity-90 transition-opacity flex items-center gap-2 justify-center`}
                  >
                    {link.iconUrl && (
                      <img
                        src={link.iconUrl}
                        alt={`${link.label} icon`}
                        className="w-4 h-4"
                      />
                    )}
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
