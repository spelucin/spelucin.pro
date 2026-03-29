// No React import needed for JSX 17+

export function Marquee({ items, maxWidth }: { items: string[]; maxWidth?: number }) {
  const doubled = [...items, ...items, ...items, ...items, ...items, ...items]; // High-buffer doubled array
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maxWidth: maxWidth || "None",
        margin: "0 auto",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 96,
          animation: "marquee 60s linear infinite",
          width: "max-content",
          alignItems: "center",
        }}
      >
        {doubled.map((item, i) => (
          <div 
            key={i} 
            style={{ 
              width: 140, 
              height: 40, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              flexShrink: 0
            }}
          >
            <img
              src={item}
              alt="Partner Logo"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                opacity: 0.35,
                filter: "grayscale(100%) brightness(1.8)",
                display: "block",
                userSelect: "none",
                pointerEvents: "none"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
