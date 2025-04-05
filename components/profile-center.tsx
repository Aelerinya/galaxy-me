import Image from "next/image";

export default function ProfileCenter() {
  return (
    <div
      className="xl:absolute xl:top-1/3 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 z-10"
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
    </div>
  );
}
