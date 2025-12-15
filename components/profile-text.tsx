export default function ProfileText() {
  return (
    <div className="relative">
      {/* Frosted glass background */}
      <div className="absolute inset-0 bg-starlight-white/5 backdrop-blur-lg rounded-2xl" />

      {/* Content */}
      <div className="relative px-8 py-6 text-center max-w-md mx-auto space-y-6">
        <div>
          <p className="text-lg text-starlight-white/90">
            Hi there! I&apos;m Lucie Philippon, a French rationalist interested
            in AI safety, writing, personal develomment and community building.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">What I&apos;m Up To</h3>
          <p className="text-starlight-white/90">
            2025 was the{" "}
            <a
              href="https://aelerinya.substack.com/p/the-year-of-wandering"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-purple hover:text-nebula-pink underline"
            >
              Year of Wandering
            </a>
            . I went from travelling to world to{" "}
            <a
              href="https://www.inkhaven.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-purple hover:text-nebula-pink underline"
            >
              blogging everyday at Inkhaven
            </a>
            , with some{" "}
            <a
              href="https://red-lines.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-purple hover:text-nebula-pink underline"
            >
              international AI policy campaigns
            </a>{" "}
            in between. Now, I&apos;m figuring out what to do in 2026. This will most
            likely involve{" "}
            <a
              href="https://www.aisafety.paris/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-purple hover:text-nebula-pink underline"
            >
              AI safety community building in Paris
            </a>
            , writing about{" "}
            <a
              href="https://www.lesswrong.com/posts/rRXoZDYuGDrqhFH6i/france-is-ready-to-stand-alone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-purple hover:text-nebula-pink underline"
            >
              French AI Policy
            </a>
            , and helping out any project that needs me. I&apos;ll blog about my
            progress on{" "}
            <a
              href="https://aelerinya.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-purple hover:text-nebula-pink underline"
            >
              Substack
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}
