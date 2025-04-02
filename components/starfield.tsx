export default function Starfield() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-space-blue">
        {/* Small stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={`small-star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Medium stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`medium-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Large stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`large-star-${i}`}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-90"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

