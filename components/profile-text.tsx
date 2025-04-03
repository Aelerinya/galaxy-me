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
            in AI safety, personal development, and community building.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">What I&apos;m Up To</h3>
          <p className="text-starlight-white/90">
            Currently, I&apos;m on a break and visiting the Bay Area, exploring
            what my next steps might be. I&apos;m working through some big
            questions like where to live, which relationships to build, and
            whether to continue policy work or return to software development.
            If you&apos;re curious about my thought process, check out my{" "}
            <a
              href="https://docs.google.com/document/d/1383rUz4ca5htvQ_bjJ2VE0Rx23JuBmavNdgSWQJPmNo/edit?tab=t.0#heading=h.kyfsm5olvsip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-purple hover:text-nebula-pink underline"
            >
              career reflections
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
