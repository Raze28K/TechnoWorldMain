export default function BackgroundGifs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="/gifs/gifone.gif" className="absolute left-[10%] top-[-50px] w-20 h-20 bg-red-500 animate-fall20" />
    </div>
  );
}
