import Starfield from "@/components/starfield";
import Planet from "@/components/planet";
import ProfileCenter from "@/components/profile-center";
import ConnectingLines from "@/components/connecting-lines";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-space-blue text-starlight-white">
      <Starfield />
      <ConnectingLines />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-4xl font-bold mb-12 mt-4">
          Lucie&apos;s Universe
        </h1>

        <div className="relative h-[calc(100vh-120px)]">
          {/* Center Profile */}
          <ProfileCenter />

          {/* AI & Professional Planet (Top Left) */}
          <Planet
            title="AI Work"
            description="My professional work in AI safety and governance"
            position="top-left"
            baseColor="tech-blue"
            darkColor="deep-blue"
            size="large"
            links={[
              {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/lucie-philippon-67690a165/",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=linkedin.com&sz=64",
              },
              {
                label: "CV/Resume",
                url: "https://drive.google.com/file/d/1JELje2IDSLOsMUR-HbVFXr7OwSOkaTtL/view?usp=sharing",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=docs.google.com&sz=64",
              },
              {
                label: "Latest Projects",
                url: "#",
                isSectionHeader: true,
              },
              {
                label: "PECC Workshop",
                url: "https://app.glueup.com/event/responsible-adoption-of-general-purpose-ai-108941/home.html",
              },
              {
                label: "AI Safety Connect",
                url: "https://www.aisafetyconnect.com/",
              },
              {
                label: "MATS Research",
                url: "https://www.matsprogram.org/alumni",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=matsprogram.org&sz=64",
              },
            ]}
          />

          {/* Community Building Planet (Top Right) */}
          <Planet
            title="Community"
            description="Building connections and communities"
            position="top-right"
            baseColor="warm-sun"
            darkColor="sunset-orange"
            size="large"
            links={[
              {
                label: "Flatshare Info",
                url: "#",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=flatshare.com&sz=64",
              },
              {
                label: "Community Initiatives",
                url: "#",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=community.org&sz=64",
              },
            ]}
          />

          {/* Friendship & Dating Planet (Bottom Right) */}
          <Planet
            title="Friendship"
            description="Get to know me better"
            position="bottom-right"
            baseColor="relationship-purple"
            darkColor="deep-purple"
            size="large"
            links={[
              {
                label: "Date me",
                url: "#",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=date.me&sz=64",
              },
              {
                label: "Manifold.love",
                url: "#",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=manifold.love&sz=64",
              },
            ]}
          />

          {/* Writing & Thoughts Planet (Bottom Left) */}
          <Planet
            title="Writing"
            description="My thoughts and writing"
            position="bottom-left"
            baseColor="idea-green"
            darkColor="forest-green"
            size="large"
            links={[
              {
                label: "LessWrong",
                url: "#",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=lesswrong.com&sz=64",
              },
              {
                label: "Twitter/X",
                url: "#",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=twitter.com&sz=64",
              },
              {
                label: "Blog",
                url: "#",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=blog.com&sz=64",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
