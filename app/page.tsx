import Starfield from "@/components/starfield";
import Planet from "@/components/planet";
import ProfileCenter from "@/components/profile-center";
import ConnectingLines from "@/components/connecting-lines";
import ContactPlanet from "@/components/contact-planet";
import FriendshipPlanet from "@/components/friendship-planet";
import WritingPlanet from "@/components/writing-planet";

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

          {/* AI Work Planet (Top Left) */}
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
                label: "Resume",
                url: "https://drive.google.com/file/d/1JELje2IDSLOsMUR-HbVFXr7OwSOkaTtL/view?usp=sharing",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=pdf.com&sz=64",
              },
              {
                label: "GitHub",
                url: "https://github.com/Aelerinya",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=github.com&sz=64",
              },
              {
                label: "Latest projets",
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
                label: "MATS",
                url: "https://www.matsprogram.org/alumni",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=matsprogram.org&sz=64",
              },
            ]}
          />

          {/* Contact Info Planet (Top Right) */}
          <ContactPlanet
            title="Contact Info"
            description="Get in touch with me"
            position="top-right"
            baseColor="warm-sun"
            darkColor="sunset-orange"
            size="large"
            links={[
              {
                label: "Email",
                url: "mailto:lucie.philippon@proton.me",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=proton.me&sz=64",
              },
              {
                label: "Phone",
                url: "tel:+33782840880",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=phone.com&sz=64",
              },
              {
                label: "@aelerinya",
                url: "#",
                action: "copy to clipboard",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=discord.com&sz=64",
              },
            ]}
          />

          {/* Friendship Planet (Bottom Right) */}
          <FriendshipPlanet
            title="Friendship"
            description="Get to know me better"
            position="bottom-right"
            baseColor="relationship-purple"
            darkColor="deep-purple"
            size="large"
            links={[
              {
                label: "Manifold.love",
                url: "https://www.manifold.love/Aelerinya",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=manifold.love&sz=64",
              },
              {
                label: "Conversation menu",
                url: "https://lucieworkinghard.notion.site/Lucie-s-conversation-menu-263f3b13347e49b8a2d09ddcd112f75a",
                iconUrl: "💬",
              },
              {
                label: "Activities menu",
                url: "https://lucieworkinghard.notion.site/Activities-menu-1a7baaa52195808588eec4545964dfcb?pvs=25",
                iconUrl: "🧗",
              },
            ]}
          />

          {/* Writing Planet (Bottom Left) */}
          <WritingPlanet
            title="Writing"
            description="My thoughts and writing"
            position="bottom-left"
            baseColor="idea-green"
            darkColor="forest-green"
            size="large"
            links={[
              {
                label: "LessWrong",
                url: "https://www.lesswrong.com/users/lucie-philippon",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=lesswrong.com&sz=64",
              },
              {
                label: "Twitter/X",
                url: "https://x.com/Aelerinya",
                iconUrl:
                  "https://www.google.com/s2/favicons?domain=twitter.com&sz=64",
              },
              {
                label: "My old website with old texts",
                url: "https://lucieworkinghard.notion.site/Lucie-s-homepage-c1deefa7fbc64ed5b3bb7dd98b963f8d",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
