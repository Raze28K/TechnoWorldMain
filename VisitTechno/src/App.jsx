import Header from './Components/Header'
import Card from './Components/Card'
import CursorCircle from "./Components/CursorCircle";
import Moon from "./Components/Moon";
import StarField from "./Components/Starfield";
import {useState } from 'react';


import computerImg from './Pictures/computer.png'
import computerImg2 from './Pictures/comp2.png'
import computerImg3 from './Pictures/remont.png'
import gifone from "./Pictures/cir.png";
import TW from "./Pictures/T&W.png";
import gif from "./gifs/gif1.gif"
import Modal from './Components/ModalWindow';
import Noute_desc from './Components/card-desc/Noute'
import Noute_desc2 from './Components/card-desc/Noute2'


function App() {
  const [TF, setTF] = useState(false);
  return (
    
    <div  className="relative overflow-x-hidden min-h-screen bg-black p-6">
      <CursorCircle />
      <StarField />
      <div className='absolute left-[90%]'>
        <Moon />
      </div>
      

      {/* 🔵 КРУГ — ФИКС */}
      <img
        src={gifone}
        alt=""
        className="absolute -left-[2px] md:left-[38%] mt-[442%] md:mt-[53%] -scale-80 md:scale-130 animate-spin [animation-duration:30s] z-0 o pointer-events-none"
      />
      <img className='md:scale-69 scale-46 absolute -left-1 md:left-[674px] mt-[454%] md:mt-[54%] rounded-4xl shadow-[0_0_60px_rgba(239,68,68,0.6)] ' src={gif} alt="" />
      <img 
       src={TW}
       alt="" 
       className='absolute -scale-45 md:scale-35 rounded-4xl -top-[10px] md:-top-[80px]  -left-10 md:-left-50'
       />

      {/* HEADER */}
      
      <Header /> 
      <Modal TF={TF} setTF={setTF} />
      
      
      <button className='bg-gradient-to-br from-black via-red-950/40 to-white/10 shadow-lg shadow-red-500/50 md:w-60 md:h-15 w-46 h-12 rounded-4xl text-white text-xl p-1 mt-110 absolute left-[20%] -top-[43%] md:left-[33%] md:top-[359px] hover:scale-120 duration-180' onClick={() => setTF(true)}>Оставить заказ</button>
      
      

      {/* ЗАГОЛОВОК */}
      <h1 className="absolute top-[6%] left-[45%] md:left-[49%] -translate-x-1/2 text-white text-5xl font-bold z-50">
        Услуги 
      </h1>

      {/* КАРТОЧКИ */}
      <div className="
            flex flex-col items-center gap-6
            md:flex-row md:gap-10
            absolute
            top-[12%]
            left-47 -translate-x-1/2
            md:left-[22%] md:-translate-x-0
            z-50
      
      ">
        
        <Card
          img={computerImg}
          img1="💻"
          title="Ремонт ноутов"
          desc="Ремонт ноутбуков, мы починим ваш быстро и надёжно!"
          desc2={<Noute_desc/>}
          
        />
        <Card
          img={computerImg2}
          img1="🖥️"
          title="Ремонт ПК"
          desc="Настройка и ремонт персональных компьютеров"
          desc2={<Noute_desc2/>}
          
          
          
        />
        <Card
          img={computerImg3}
          img1="🪛"
          title="Разное.."
          desc="От сборки компьютера,до установки windows "
         
          
        />
        <button onClick={() => {window.open("https://wa.me/77024007227", "_blank")}}
        className="bg-gradient-to-br from-black via-red-950/40 to-white/10 shadow-lg shadow-red-500/50 md:w-60 md:h-15 w-46 h-12 rounded-4xl text-white text-xl p-1 mt-110 absolute left-[20%] -top-[43%] md:left-[55%] md:top-[16%] hover:scale-120 duration-180">
          Связаться с нами
        </button>
        <h2 className="md:mt-130 mt-630 text-center text-2xl italic text-white/70 absolute md:left-[25%] left-[1%] hover:text-white duration-500">
          Мы не продаём услуги — мы решаем задачи.
        </h2>
        
      </div>
      <div className='mt-30'>
          <h1
          id="target"
          className="scale-170 md:scale-100 absolute top-[71%] md:top-[37%] left-[48%] -translate-x-1/2 text-white text-1xl  md:text-5xl font-bold z-0">
          Почему выбирают нас
        </h1>

        <div className="shadow-inner pl-80 pt-20 z-50 relative">
          
          <ul className="list-disc list-inside text-white text-4xl space-y-2">
            <li className="scale-65 md:scale-100 bg-gradient-to-br from-zinc-950 via-red-950/80 to-white/5  w-105 md:w-105 p-1 absolute -left-[70px] md:left-[55%] top-[1082%] md:-top-[70%] rounded-2xl hover:scale-108 duration-180 opacity-90">
              Быстрая работа
            </li>
            
            <li className="scale-65 md:scale-100 bg-gradient-to-br from-zinc-950 via-red-950/80 to-white/5  w-105 md:w-105 p-1 absolute -left-[70px] md:left-[55%] top-[930%] md:top-[350%] rounded-2xl hover:scale-108 duration-180 opacity-90">
              Качественная работа
            </li>
            <li className="scale-65 md:scale-100 bg-gradient-to-br from-zinc-950 via-red-950/80 to-white/5 w-115 p-1 absolute -left-[77px] md:left-[20%] top-[980%] md:-top-[50%] rounded-2xl hover:scale-108 duration-180 opacity-90">
              Удобное расположение
            </li>
            <li className="scale-65 md:scale-100 bg-gradient-to-br from-zinc-950 via-red-950/80 to-white/5 w-125 p-1 absolute top-[1030%] -left-[85px] md:top-[390%] md:left-[20%] rounded-2xl hover:scale-108 duration-180 opacity-90">
              Ремонт любого масштаба
            </li>
          </ul>
        </div>

      </div>
      <div className='mt-20'>
            <h1
          id="place"
          className="absolute top-[96%] md:top-[62%] left-[49%] -translate-x-1/2 text-white md:text-5xl text-4xl font-bold z-50 hover:animate-pulse duration-300"
        >
          Местоположение
        </h1>
          // className="absolute top-[105%] left-[9%] w-75 h-120 md:top-[65%] md:left-[55%] z-50 rounded-xl w-50 md:w-200 md:h-160"
        {/* КАРТА */}
        <iframe 
          className="absolute top-[105%] left-[9%] w-75 h-120 md:top-[65%] md:left-[55%] z-50 rounded-xl w-50 md:w-200 md:h-160"
          id="map_26511246" 
          frameborder="0" 
          width="100%" 
          height="600px" 
          src="https://makemap.2gis.ru/widget?data=eJw1j19rgzAUxb_L3eOkJNFGK-zJsn-MUfcy2tEHqXddRkwkXumc-N13qyxwIZxzz8kvI_hQY8D6AX2DFAx2kH-MQEOLkMM9VtQHhAja4FsMNPtsG7JXXzx_l27Ylu61uIj949uZCin227Kn4la8XO44WGN3CqYl4x0HWDh56wNfb4TK5Kdi5ffJ1fgDuRT_Z4rgvAAN83MLzc4bR3MDQxtX0Qyb6tVGaJXKKIlXSupMJEfOmxryOFbr6RhBU7U735mFYQRbEeTLcpqITap5pE4isFd_6VunMs4ylSQ6ZkDvG8bLuJY_4619_0K0h1ml0OP0Bz9rY8M" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation">

        </iframe>

        <div style={{ height: "1200px" }} />

        <h1 className="text-red-600/85 absolute top-[98%] md:top-[65%] left-[45px] md:left-[10%] text-3xl md:text-5xl z-50">
          Адрес
        </h1>
        <p className="text-white/85 absolute top-[100%]  md:top-[68%] left-[12px] md:left-[10%] text-1xl md:text-2xl  z-50">
          Улица Тимирязева, 42 к15/6
          Бостандыкский район, Алматы, 050057
        </p>

        <h1 className="text-red-600/85 absolute top-[98%] md:top-[72%] left-[61%] md:left-[10%] text-3xl md:text-5xl z-50">
          График
        </h1>
        <p className="text-white/85 absolute top-[100%] md:top-[75%] left-[58%] md:left-[10%] text-1xl md:text-2xl z-50">
          9:00–22:00 UTC+5
        </p>
        <h2 className="text-white absolute top-[129%] md:top-[80%] left-[7%] text-3xl md:text-4xl hover:text-red-700 duration-600 z-50">
          Будем рады видеть вас в нашем сервисе!
        </h2>
        <h1 className='text-red-600  absolute top-[100%] md:top-[95%] left-[58%] md:left-[40%] md:text-7xl text-1xl md:text-2xl z-50'>Master</h1>
        <h1 className='text-white/85 absolute top-[100%] md:top-[95%] left-[58%] md:left-[53%] md:text-7xl text-1xl md:text-2xl z-50'>ком</h1>
      </div>
      
      

    </div>
  )
}

export default App
