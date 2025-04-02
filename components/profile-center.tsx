import Image from "next/image";

export default function ProfileCenter() {
  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      data-center="true"
    >
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cosmic-purple to-nebula-pink p-1">
        <div className="w-full h-full rounded-full bg-space-blue p-2">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-starlight-white/30">
            <Image
              src="/images/lucie-profile.jpg"
              alt="Lucie's profile picture"
              width={240}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-6 max-w-xs mx-auto">
        <h2 className="text-2xl font-bold mb-2">Lucie</h2>
        <p className="text-starlight-white/90">
          Hi, I'm Lucie! A French gal interested in AI notkilleveryoneism.
        </p>
      </div>
    </div>
  );
}
