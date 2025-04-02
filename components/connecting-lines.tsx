export default function ConnectingLines() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Line to top-left (larger planet) */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2">
        <div className="absolute top-[9.5rem] left-[9.5rem] w-[calc(50vw-9.5rem)] h-[calc(50vh-9.5rem)] border-t border-l border-cosmic-purple/30 rounded-tl-full" />
      </div>

      {/* Line to top-right */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2">
        <div className="absolute top-32 right-32 w-[calc(50vw-8rem)] h-[calc(50vh-8rem)] border-t border-r border-cosmic-purple/30 rounded-tr-full" />
      </div>

      {/* Line to bottom-left (larger planet) */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
        <div className="absolute bottom-[9.5rem] left-[9.5rem] w-[calc(50vw-9.5rem)] h-[calc(50vh-9.5rem)] border-b border-l border-cosmic-purple/30 rounded-bl-full" />
      </div>

      {/* Line to bottom-right */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
        <div className="absolute bottom-32 right-32 w-[calc(50vw-8rem)] h-[calc(50vh-8rem)] border-b border-r border-cosmic-purple/30 rounded-br-full" />
      </div>
    </div>
  )
}

