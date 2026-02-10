import { useState, useEffect } from "react";

function Header() {
  const [active, setActive] = useState("services"); // текущая активная кнопка

  // Функция для клика по кнопке "Почему мы?"
  const handleWhyClick = () => {
    setActive("why"); // делаем кнопку активной
    const target = document.getElementById("target");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePlaceClick = () => {
    setActive("location");
    const place = document.getElementById("place");
    if (place) {
      place.scrollIntoView({behavior:"smooth"})
    }
  };

  useEffect(() => {
    // Слушаем прокрутку
    const onScroll = () => {
      const target = document.getElementById("target");
      if (target) {
        const rect = target.getBoundingClientRect(); // позиция относительно окна
        if (rect.top <= 0) {
          // если div "Почему мы?" виден сверху
          setActive("why");
        } else {
          // если прокрутка выше div — возвращаем на "Услуги" 
          setActive("services");
        }
        
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll); // очистка при размонтировании
    };
  }, []);

  return (
    <div className="flex ml-10 flex-col md:items-center h-screen  p-8">
      <div className="flex flex-col items-center">
        <div className="group flex space-x-8 relative">
          
          <button
            className={`text-1xl md:text-2xl font-semibold transition-transform duration-200 hover:scale-110 ${
              active === "why" ? "text-blue-700" : "text-white"
            }`}
            onClick={handleWhyClick}
          >
            Почему мы?
          </button>

          <button
            className={`text-1xl md:text-2xl font-semibold transition-transform duration-200 hover:scale-110 ${
              active === "services" ? "text-blue-700" : "text-white"
            }`}
            onClick={() => setActive("services")}
          >
            Услуги
          </button>

          <button
            className={`text-1xl md:text-2xl font-semibold transition-transform duration-200   hover:scale-110 ${
              active === "location" ? "text-blue-700" : "text-white"
            }`}
            onClick={handlePlaceClick}
          >
            Местоположение
          </button>

          <div className="absolute bottom-[-20px] left-[25px] md:left-[45px] flex justify-center group-hover:left-[30px]">
            <div className="h-0.5 w-[250px] md:w-[350px] bg-gradient-to-r  from-transparent via-white to-transparent group-hover:w-[400px] duration-500 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
