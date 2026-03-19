import closee from "../../Pictures/icon_close.png"
import { useState, useEffect } from "react";
import open from "../../Pictures/cil-code.png"

const PASS = "MasterкомAa$admin505";

function Noute_desc() {

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("noute_items_1");
    return saved ? JSON.parse(saved) : [
      "Замена матрицы 5.000",
      "Замена матрицы (вклейка) 10.000",
      "Восстановление корпуса от 10.000",
      "Замена петель от 10.000",
      "Замена SSD (без переноса информации с установкой windows и софта) 12.000",
      "Замена SSD (с переносом информации с установкой windows и софта) 20.000",
      "Чистка ПК от 5.000",
      "Чистка Видеокарты от 10.000",
      "Замена комплектующих 5.000",
      "Замена разъёмов (питание,USB,HDMI и т.д) от 10.000",
      "Ремонт монитора 7.000",
      "Мелкий ремонт от 5.000",
      
    ];
  });

  const [admin, setAdmin] = useState(true);
  const [inputValue,setInputValue] = useState("")
  const [frameTF,setFrameTF] = useState(true)

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

  useEffect(() => {
    localStorage.setItem("noute_items_1", JSON.stringify(items));
  }, [items]);

  const handleChange = (index, value) => {

    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);

  };

  const HandleAdd = () => {
    if (!inputValue.trim()){
      alert("Нельзя сохранить пустую услугу!")
    }
    else{
      setFrameTF(true)

      const newItems = [...items, inputValue];
      setItems(newItems)

      localStorage.setItem("noute_items_1", JSON.stringify(newItems));
      setInputValue("")
    }
    
  };

  const removeItem = (indexToRemove) => {

    const updatedItems = items.filter((_, index) => index !== indexToRemove);

    setItems(updatedItems);

    localStorage.setItem("noute_items_1", JSON.stringify(updatedItems));

  };

  // ПОДСВЕТКА БОРДЕРА
  

  const handleMouseMove = (e) => {

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
      group relative
      bg-[#1e1f22]/95
      text-white
      md:w-[420px]
      w-[300px]
      -mt-5
      p-6
      rounded-2xl
      shadow-xl
      z-[100000]
      overflow-hidden
      "
    >

      {/* ПОДСВЕТКА */}
      <div
        className="
        pointer-events-none absolute inset-0 rounded-2xl
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        "
        style={{
          background: `
            radial-gradient(
              400px circle at var(--x) var(--y),
              rgba(255,0,0,0.9),
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

      <h1 className="text-3xl font-semibold mb-4 text-red-600 flex justify-center">
        Прайс-лист
      </h1>

      <div className={`bg-[#1e1f22] w-80 h-40 fixed -mt-70 ml-4 rounded-2xl ${(!frameTF && !admin) ? "opacity-100" : "opacity-0"} `}>

        <h1 className="flex justify-center mt-2 text-2xl">
          Новая услуга
        </h1>

        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="ml-15 mt-5 border-2 rounded-2xl p-2 border-gray-500"
          type="text"
          placeholder="Название услуги.."
          
        />
        

        <button
          onClick={HandleAdd}
          className="fixed mt-18 -ml-36 duration-100 rounded-2xl"
        >
          Cохранить
        </button>

        <button
          onClick={() => setFrameTF(true)}
          className="fixed ml-7 -mt-6"
        >
          <img src={closee}/>
        </button>

      </div>

      <button
        onClick={() => setFrameTF(false)}
        className={`-mt-15 scale-130 border-2 border-white rounded-2xl p-1 fixed ${admin ? "opacity-0":"opacity-100"} `}
      >
        <img src={open} alt="" />
      </button>

      <ul className="space-y-1">

        {items.map((item, index) => (

          <li key={index} className="flex items-start gap-1 relative">

          <span className="text-white/90 text-sm w-[16px]">
            {index + 1}.
          </span>

          {/* Обертка textarea + символ */}
          <div className="relative w-full">
            <textarea
              rows={1}
              readOnly={admin}
              value={item.endsWith("₸") ? item : item + " ₸"} // всегда добавляем ₸ в конце
              onChange={(e) => {
                if (!admin) {
                  let text = e.target.value;

                  // убираем символ ₸ если пользователь удалил/редактировал
                  if (text.endsWith("₸") === false) {
                    text = text.replace(/₸/g, "") + " ₸";
                  }

                  handleChange(index, text);

                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }
              }}
              ref={(el) => {
                if (el) {
                  el.style.height = "auto";
                  el.style.height = el.scrollHeight + "px";
                }
              }}
              className="
                w-full
                bg-transparent
                text-white
                text-sm
                resize-none
                outline-none
                border-none
                p-[2px]
                m-0
                overflow-hidden
                leading-tight
              "
            />
            
            
          </div>

          {!admin && (
            <button
              className="mt-1 ml-2"
              onClick={() => removeItem(index)}
            >
              <img src={closee} />
            </button>
          )}

        </li>

        ))}

      </ul>

    </div>

  );

}

export default Noute_desc;