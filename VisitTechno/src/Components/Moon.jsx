export default function Moon() {
  const hour = new Date().getHours(); 
  const isNight = hour >= 20 || hour < 6;
  if (!isNight) return null;
  return (
    <div className="pointer-events-none fixed top-6 md:top-10 right-5 md:right-10 w-20 md:w-40 h-20 md:h-40">
      {/* Полумесяц */}
      <div
        className="
          absolute inset-0
          rounded-full
          bg-white
          animate-moon-float
          scale-x-[-1]
          [mask-image:radial-gradient(circle_at_65%_53%,transparent_57%,black_51%)]
        "
      />

      {/* Мягкое свечение (белое) */}
      <div
        className="
          absolute -inset-8
          rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.35),transparent_70%)]
          blur-2xl
        "
      />
    </div>
  );
}
