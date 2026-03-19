
import { useState } from "react";
import { useEffect } from "react";
import closeIcon from "../Pictures/icon_close.png";

const PASS = "MasterкомAa$admin505";

function Card({ title, desc, img, img1,price,desc2,btn }) {

  const [editTitle, setEditTitle] = useState(title)
  const [editDesc, setEditDesc] = useState(desc)
  const [admin, setAdmin] = useState(true);
 
  
  const [TF2,setTF2] = useState(false)
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e) => {
    // отключаем подсветку на мобиле
    if (window.innerWidth < 768) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    e.currentTarget.style.setProperty("--x", `${x}px`)
    e.currentTarget.style.setProperty("--y", `${y}px`)
  }
 
  useEffect(() => {
      
      const handleKeyDown = (e) => {
        
        if (e.altKey && e.shiftKey && e.key.toLowerCase() === "d") {
  
          let value = prompt("Введите пароль!");
  
          if (value === PASS) {
            setAdmin(false);
          }
  
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
  
  }, []);
  // const timer = setTimeout(() => setVisible(false), 1000);
  // return () => clearTimeout(timer);
  useEffect(() => {
    if (TF2) {
      setVisible(false); // сначала скрываем
      const timer = setTimeout(() => {
        setVisible(true); // через 1 сек показываем
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [TF2]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`
          group relative w-80 h-96 rounded-2xl
          bg-gradient-to-br from-zinc-950 via-red-950/40 to-white/5
          transform transition-transform duration-500
          
          shadow-xl 
          flex flex-col items-center p-6
          overflow-hidden
          ${TF2 ? "" : "md:hover:scale-105 md:hover:shadow-2xl"}
          
        `}
    >

      {/* ПОДСВЕТКА БОРДЕРА */}
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
              rgba(143, 10, 0),
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
          absolute bottom-0 left-0 w-0 h-1 bg-red-800
          transition-all duration-500
          md:group-hover:w-full
        "
      />

      {/* КАРТИНКА / EMOJI */}
      <div className="relative flex justify-center items-center h-40 w-full">

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

        {/* РЕДАКТИРУЕМЫЙ TITLE */}
        <input
          value={editTitle}
          readOnly={admin}
          onChange={(e) => {
            
            setEditTitle(e.target.value)

          }} 
          className="
            text-white text-2xl font-bold
            text-center
            bg-transparent
            outline-none
            w-full
            z-1000000
          "
        />

        {/* РЕДАКТИРУЕМЫЙ DESC */}
        <textarea
          value={editDesc}
          readOnly={admin}
          onChange={(e) => setEditDesc(e.target.value)}
          className="
            text-white text-sm text-center mt-1
            bg-transparent
            outline-none
            resize-none
            w-full
            z-1000000
          "
        />

        <button
          className="bg-red-600/80 rounded-2xl p-1 mt-5 hover:scale-110 duration-200 text-white text-xl"
          onClick={() => {
         
            if (desc2) setTF2(true); // если есть компонент — открыть
          }}
        >
          Подробнее
        </button>

      </div>
      {TF2 && desc2 && (
        <div
          className={`fixed inset-0 z-[100000000] flex items-center justify-center bg-black/60 duration-50 ${visible ? "opacity-100" : "opacity-0"}`}
          onClick={() => setTF2(false)} // клик в любом месте закрывает
        >
          <div
            className="pointer-events-auto duration-500 "
            onClick={(e) => e.stopPropagation()} // клики **только внутри** не закрывают
          >
            <button onClick={() => setTF2(false)} className="text-2xl scale-250 z-100000000  text-black border-1 border-white  to-white/10 p-1 rounded-3xl mt-1 ml-95 fixed">
              <img src={closeIcon} className="w-[5px] h-[5px] rounded-3xl " />
            </button>
            {desc2}
          </div>
        </div>
      )}
     
    </div>
  )
}

export default Card