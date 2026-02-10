function Card({ title, desc, img, img1, price }) {

  const handleMouseMove = (e) => {
    // отключаем подсветку на мобиле
    if (window.innerWidth < 768) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    e.currentTarget.style.setProperty("--x", `${x}px`)
    e.currentTarget.style.setProperty("--y", `${y}px`)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        group relative w-80 h-96 rounded-2xl
        bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950
        transform transition-transform duration-500
        md:hover:scale-105
        shadow-xl md:hover:shadow-2xl
        flex flex-col items-center p-6
        overflow-hidden
      "
    >

      {/* ПОДСВЕТКА БОРДЕРА — ТОЛЬКО ДЕСКТОП */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 md:group-hover:opacity-100
          transition-opacity duration-300
        "
        style={{
          background: `
            radial-gradient(
              400px circle at var(--x) var(--y),
              rgba(45, 37, 179),
              transparent 60%
            )
          `,
          mask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      />

      {/* НИЖНЯЯ ПОЛОСА */}
      <span
        className="
          absolute bottom-0 left-0 w-0 h-1 bg-blue-800
          transition-all duration-500
          md:group-hover:w-full
        "
      />

      {/* КАРТИНКА / EMOJI */}
      <div className="relative flex justify-center items-center h-40 w-full">

        {/* EMOJI — ТОЛЬКО ДЕСКТОП */}
        <h1
          className="
            absolute text-7xl text-white
            hidden md:block
            md:group-hover:opacity-0
            transition-opacity
          "
        >
          {img1}
        </h1>

        {/* КАРТИНКА */}
        <img
          src={img}
          alt=""
          className="
            absolute w-100 h-100 object-contain
            opacity-100 md:opacity-0
            md:group-hover:opacity-100
            transition-opacity
          "
        />
      </div>

      {/* ТЕКСТ */}
      <div className="w-full mt-auto flex flex-col items-center">
        <hr className="border-white/40 my-2 w-full" />
        <h1 className="text-white text-2xl font-bold">{title}</h1>
        <h3 className="text-white text-sm text-center mt-1">{desc}</h3>
        <h2 className="text-white text-2xl text-center mt-2">{price}</h2>
      </div>
    </div>
  )
}

export default Card
