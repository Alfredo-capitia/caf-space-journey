 import {  X } from "lucide-react"
import { Gallery19 } from "./components/card"
import { Blog44 } from "./components/cardInformation"
import { Testimonial23 } from "./components/depoimentClient"
import { Header78 } from "./components/layoutScrollingSnap"
import { Layout417 } from "./components/leave"
import { Layout421Slot } from "./components/amazingScrolly"

import { useState } from "react"
import { FooterComponet } from "./components/footer"

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
    <div className="w-full min-h-max px-14 box-border sx:px-4">
      {/* header aplication */}
      <header className="h-42 flex items-center justify-between 
      w-full sx:px-2 pt-4">
      <div className="bg-pattern h-24 w-24 bg-cover object-cover sx:size-16"></div>
      <div>
        <button onClick={openModal} className="bg-zinc-300 p-3 rounded-xl text-base
         text-zinc-900 hover:bg-zinc-200 transition-all sx:text-zinc-950 sx:hover:text-white sx:hover:bg-black sx:bg-zinc-300 sx:text-xs
          ease-in">Obter Certificado</button>
      </div>
      </header>
      {/* header aplication */}
      {/* content aplication */}
      <section className="block items-center justify-center mt-3">
      
        <div className="flex items-center sx:flex-col  sx:gap-6">
          <div className="w-[650px] sx:w-full block items-center justify-center mt-24">
            <h1 className="text-5xl text-left  w-[610px] font-medium
             leading-tight sx:text-2xl sx:text-center sx:w-full sx:px-0
             -tracking-normal">Explorando o Futuro da Educação Espacial</h1>
            <p className="w-[500px] pt-8 sx:w-full sx:text-center sx:justify-center sx:text-xs sx:px-2">Nossa missão é inspirar e 
              capacitar as novas gerações através do conhecimento sobre o espaço. Junte-se a nós nessa jornada
               de descobertas eimport inovações que moldam o futuro da educação.</p>
            <div className="flex items-center sx:flex-col gap-6 pt-8">
            < button className="bg-zinc-300 transition-all ease-out
             hover:bg-zinc-400 p-3 rounded-lg">Saiba mais</button>
            <button className="p-3 rounded-lg text-zinc-900
             hover:bg-zinc-600 sx:hidden hover:text-zinc-100
             transition-all ease-out">Inscrever-se</button>
            </div>
          </div>
          <div className="flex1 h-[555px] w-[585px] bg-wapper sx:w-full
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
      <FooterComponet />
             </div>
      
      {/* content aplication */}

       
       {/* modal aplication */}
       
       {/* modal aplication */}

    {/* // divisoria geral */}

   </div>
   {showModal && (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form action="" className="w-[640px] transition-all ease-out z-50 block items-center p-3 justify-center text-zinc-900 bg-zinc-50 rounded-xl px-5 py-6">
        {/* <div className="h-[100%] bg-wa import { Facebook, Instagram, Twitter, Youtube,  } from "lucide-react"
pper w-[50%]"></div> */}
        <div className="flex justify-between items-center">
          <img className="size-18" src="src/assets/charp.svg" alt="" />
          <X onClick={closeModal} className="size-7"/>

        </div>
        <div className="flex items-center justify-center pb-5">
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
        </div>
       
      </form>
    </div>
   ) }
   </>
   
  )
}


export {App}
