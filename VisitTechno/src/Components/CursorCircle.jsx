import { useEffect, useState } from "react";

export default function CursorCircle() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        w-22 h-22
        rounded-full
        bg-blue-500/40
        blur-2xl
        transition-transform duration-300 ease-out
      "
      style={{
        transform: `translate(${pos.x - 64}px, ${pos.y - 64}px)`,
      }}
    />
  );
}