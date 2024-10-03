 import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Gallery19 } from "./components/card"
import { Blog44 } from "./components/cardInformation"
import { Testimonial23 } from "./components/depoimentClient"
import { Header78 } from "./components/layoutScrollingSnap"
import { Layout417 } from "./components/leave"
import { Layout421Slot } from "./components/amazingScrolly"

import { useState } from "react"

  function App() {
  const [showModal, setShowModal] = useState(false)
  function openModal(){
    setShowModal(true)
    }
    function closeModal(){
    setShowModal(false)
    }
  return (
    <>
       {/* // divisoria geral */}
    <div className="w-full min-h-max px-14">
      {/* header aplication */}
      <header className="h-42 flex items-center justify-between 
      w-full bg-white pt-4">
      <div className="bg-pattern h-24 w-24 bg-cover object-cover"></div>
      <div>
        <button onClick={openModal} className="bg-zinc-300 p-3 rounded-xl text-base
         text-zinc-900 hover:bg-zinc-200 transition-all
          ease-in">Obter Certificado</button>
      </div>
      </header>
      {/* header aplication */}
      {/* content aplication */}
      <section className="block items-center justify-center mt-3">
      
        <div className="flex items-center">
          <div className="w-[650px] block items-center justify-center mt-24">
            <h1 className="text-5xl text-left  w-[610px] font-medium
             leading-tight
             -tracking-normal">Explorando o Futuro da Educação Espacial</h1>
            <p className="w-[500px] pt-8">Nossa missão é inspirar e 
              capacitar as novas gerações atravé
              s do conhecimento sobre o espaço. Junte-se a nós nessa jornada
               de descobertas eimport inovações que moldam o futuro da educação.</p>
            <div className="flex items-center gap-6 pt-8">
            < button className="bg-zinc-300 transition-all ease-out
             hover:bg-zinc-400 p-3 rounded-lg">Saiba mais</button>
            <button className="p-3 rounded-lg text-zinc-900
             hover:bg-zinc-600 hover:text-zinc-100
             transition-all ease-out">Inscrever-se</button>
            </div>
          </div>
          <div className="flex1 h-[555px] w-[585px] bg-wapper
           rounded-3xl flex"></div>
        </div>
        {/* exploring content */}
        {/* education content  */}
              {/* card content  */}
   <Layout421Slot/>
        <Header78 />
  <Blog44 />
  <Gallery19/>
  <Testimonial23 />
  <Layout417 />
        </section>
       <div className="px-18">
       <footer className="translate-y-0 border-y-2 border-t-background-alternative py-8 font-Sans">
          <div className="flex justify-between items-center translate-y-9 pb-12">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-9">
              <div className="bg-pattern h-24 w-24 bg-cover object-cover"></div>
              
              <p className="w-[589px]">Inscreva-se em nosso boletim para ficar por dentro de novidades e lançamentos.</p>

              <form className=" flex gap-3" action="">
                <input className="bg-zinc-200 p-3 rounded-2xl outline-none text-black" type="text" placeholder="Digite o seu Gmail" />
                <button className="bg-zinc-950 text-white p-3 rounded-2xl" type="submit">Inscrever-se</button>
              </form>

              </div>
              
            </div>

            <div className="flex flex-col gap-4">
              <h1>FAQs</h1>
              <p>About us</p>
              <p>Contact Us</p>
              <p>Work with Us </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1>Siga-nos</h1>
              <div className="flex items-center gap-4">
              <Facebook />
                <p>Facebook</p>
              </div>
              <div className="flex items-center gap-4">
                <Twitter/>
                <p>Twitter</p>
              </div>
              <div className="flex items-center gap-4">
                <Youtube/>
                <p>Youtube</p>
              </div>
              <div className="flex items-center gap-4">
                <Instagram/>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </footer>
        <div className="font-Sans flex justify-between items-center py-2">
          <div className="flex gap-2 text-zinc-600">
          <p>@  2024 Nucleo.com.</p>
          <p> Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-zinc-600">
            <p>Politica de Privacidade </p>
            <p>Termos de uso</p>
          </div>
        </div>
       </div>
      
      {/* content aplication */}

       
       {/* modal aplication */}
       
       {/* modal aplication */}

    {/* // divisoria geral */}

   </div>
   {showModal && (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form action="" className="w-[640px] z-50 flex items-center justify-center text-zinc-900 bg-zinc-50 rounded-xl px-5 py-6">
        {/* <div className="h-[100%] bg-wapper w-[50%]"></div> */}
        <img className="w-[50%]" src="src/assets/people.svg" alt="" />
        <div className="flex flex-col flex-1 gap-5 font-Sans">
          <div>
          <label htmlFor="name" className="block text-xs font-medium mb-2">Nome:</label>
          <input type="text" id="name" name="name" className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
          </div>

          <div>
          <label htmlFor="email" className="block text-xs font-medium mb-2">E-mail:</label>
          <input type="email" id="email" name="email" className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
          </div>

          <div>
          <label htmlFor="number" className="block text-xs font-medium mb-2"> Number:</label>
          <input type="tel" id="number" name="number" className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />       
           </div>

           <button className="block w-full px-3 py-2 text-sm border  bg-slate-900 text-white rounded-xl focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" type="submit">Obter</button>
         
        </div>
      </form>
    </div>
   ) }
   </>
   
  )
}


export {App}
