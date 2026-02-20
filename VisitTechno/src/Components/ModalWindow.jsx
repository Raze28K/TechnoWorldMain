import { useState } from "react"
import emailjs from "@emailjs/browser";
import TW from "../Pictures/T&W.png";

function Modal({TF,setTF}){
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [category,setCategory] = useState("");
    const [problem,setProblem] = useState("");


    const sendEmail = () => {

        const phoneRegex = /^[0-9]{10,15}$/;

        if(name === "" || number === "" || category  === "" || problem === ""){
            alert("Вы не заполнили одно из полей!")
            return;
        }

        if(!phoneRegex.test(number)){
            alert("Неверный номер!")
            return;
        }

        console.log("Вызвался")
        emailjs.send(
        "service_ps16iru",
        "template_g532mxg",
        {
            name: name,
            number: number,
            category: category,
            problem: problem,
            logo: TW,
        },
        "cF022Rv2A0_mz3Gty"
        )
        .then(() => alert("Отправлено"))
        .catch(err => console.log(err));
        setTF(false)
    };

    return(
        <div className={`fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm ${TF ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

            <div className="bg-[#1e1f22] text-white w-[420px] p-8 rounded-2xl shadow-2xl border border-white/10">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Обратная связь
                </h1>

                <div className="flex flex-col gap-4">

                    <input
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="bg-[#2b2d31] p-3 rounded-xl outline-none focus:ring-2 focus:ring-red-500"
                    />
                    

                    <input
                        placeholder="Телефон"
                        type="number"
                        value={number}
                        onChange={(e)=>setNumber(e.target.value)}
                        className="bg-[#2b2d31] p-3 rounded-xl outline-none focus:ring-2 focus:ring-red-500"
                    />
                    

                    <select
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        className="bg-[#2b2d31] p-3 rounded-xl outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <option value="">Выберите услугу</option>
                        <option>Ремонт ноутбуков</option>
                        <option>Ремонт ПК</option>
                        <option>Ремонт техники</option>
                    </select>
                    

                    <textarea
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        placeholder="Опишите проблему..."
                        className="bg-[#2b2d31] p-3 rounded-xl h-28 resize-none outline-none focus:ring-2 focus:ring-red-500"
                    />
                    

                    <button onClick={sendEmail} className="mt-4 bg-red-600 hover:bg-red-700 transition p-3 rounded-xl font-semibold shadow-lg shadow-red-500/40">
                        Отправить
                    </button>
                    <button onClick={(e) => setTF(false)} className="mt-4 bg-red-600 hover:bg-red-700 transition p-3 rounded-xl font-semibold shadow-lg shadow-red-500/40">
                        Отмена
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Modal