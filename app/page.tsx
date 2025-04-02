import Starfield from "@/components/starfield"
import Planet from "@/components/planet"
import ProfileCenter from "@/components/profile-center"
import ConnectingLines from "@/components/connecting-lines"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-space-blue text-starlight-white">
      <Starfield />
      <ConnectingLines />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-4xl font-bold mb-12 mt-4">Lucie&apos;s Universe</h1>

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
              { label: "LinkedIn", url: "#" },
              { label: "CV/Resume", url: "#" },
              { label: "PECC Workshop", url: "#" },
              { label: "MATS Research", url: "#" },
            ]}
          />

          {/* Community Building Planet (Top Right) */}
          <Planet
            title="Community"
            description="Building connections and communities"
            position="top-right"
            baseColor="warm-sun"
            darkColor="sunset-orange"
            links={[
              { label: "Flatshare Info", url: "#" },
              { label: "Community Initiatives", url: "#" },
            ]}
          />

          {/* Friendship & Dating Planet (Bottom Right) */}
          <Planet
            title="Friendship"
            description="Get to know me better"
            position="bottom-right"
            baseColor="relationship-purple"
            darkColor="deep-purple"
            links={[
              { label: "Date me", url: "#" },
              { label: "Manifold.love", url: "#" },
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
              { label: "LessWrong", url: "#" },
              { label: "Twitter/X", url: "#" },
              { label: "Blog", url: "#" },
            ]}
          />
        </div>
      </div>
    </main>
  )
}

