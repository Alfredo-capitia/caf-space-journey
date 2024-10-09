 import {  X } from "lucide-react"
import { Gallery19 } from "./components/card"
import { Blog44 } from "./components/cardInformation"
import { Testimonial23 } from "./components/depoimentClient"
import { Header78 } from "./components/layoutScrollingSnap"
import { Layout417 } from "./components/leave"
// import { Layout421Slot } from "./components/amazingScrolly"

import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { useState } from "react"
import { FooterComponet } from "./components/footer"
import axios from "axios"


  function App() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [number, setNumber] = useState<string>("")
  const [loading, setLoading] = useState(false)

  
  function openModal(){
    setShowModal(true)
  }
  function closeModal(){
    setShowModal(false)
  }

  async function getCerticate() {
    setLoading(true)
    try{
    
     const response =  await  axios.post("https://certificate-yc03.onrender.com", {email , name , number});
     console.log(response)
     enqueueSnackbar(`Sucesso , será enviado um link pra o seu ${email} pra obteres o seu Certificado !`,{
      variant:"success"

    })

    setEmail("")
     setName("")
     setNumber("")
     closeModal()


    }catch{
      enqueueSnackbar('Erro ao obter o certificado!',{
        variant:"error"
      })
    
    }finally{
      setLoading(false)
    } }

  
  

  return (
    <>
    <SnackbarProvider />
       {/* // divisoria geral */}
    <div className="w-full min-h-max px-14 box-border sx:px-4 lg:px-14">
      {/* header aplication */}
      <header className="h-42 flex items-center justify-between 
      w-full sx:px-2 pt-4 lg:p-4">
      <div className="bg-pattern size-24 bg-cover object-cover sx:size-16 lg:size-24"></div>
      <div>
        <button onClick={openModal} className="bg-zinc-300 p-3 rounded-xl text-base
         text-zinc-900 hover:bg-zinc-200 transition-all sx:text-zinc-950
          sx:hover:text-white sx:hover:bg-black sx:bg-zinc-300 sx:text-xs
          lg:bg-zinc-300 lg:text-zinc-900 lg:hover:text-black lg:hover:bg-zinc-200 lg:text-md
          ease-in">Obter Certificado</button>
      </div>
      </header>
      {/* header aplication */}
      {/* content aplication */}
      <section className="block items-center justify-center mt-3">
      
        <div className="flex sx:block sx:gap-6 lg:flex lg:gap-4">
          <div className="w-[650px] sx:w-full lg:w-[650px] block items-center justify-center mt-24 lg:mt-32">
            <h1 className="text-5xl text-left  w-[610px] font-medium
             leading-tight sx:text-2xl sx:text-center sx:w-full sx:px-0 lg:text-7xl lg:text-left
             -tracking-normal">Explorando o Futuro da Educação Espacial</h1>
            <p className="w-[500px] pt-8 sx:w-full sx:text-center  sx:justify-center sx:text-xs sx:px-2 lg:text-left lg:text-base">Nossa missão é inspirar e 
              capacitar as novas gerações através do conhecimento sobre o espaço. Junte-se a nós nessa jornada
               de descobertas eimport inovações que moldam o futuro da educação.</p>
            <div className="flex items-center lg:flex sx:block sx:items-center sx:justify-center sx:text-center lg:justify-start gap-6 pt-8  ">
            < button className="bg-zinc-300 transition-all ease-out
             hover:bg-zinc-400 p-3 rounded-lg  lg:translate-x-[0%] ">Saiba mais</button>
            <button className="p-3 rounded-lg text-zinc-900
             hover:bg-zinc-600 sx:hidden lg:block hover:text-zinc-100
             transition-all ease-out">Inscrever-se</button>
            </div>
          </div>
          <div className="flex1 h-[555px] w-[585px] bg-wapper sx:w-full sx:mt-6 lg:mt-0 lg:w-[585px]
           rounded-3xl flex"></div>
        </div>
        {/* exploring content */}
        {/* education content  */}
              {/* card content  */}
   
        <Header78 />
  <Blog44 />
  <Gallery19/>
  <Testimonial23 />
  <Layout417 />
        </section>
       <div className="px-18 sx:px-0">
      <FooterComponet />
             </div>
      
      {/* content aplication */}

       
       {/* modal aplication */}
       
       {/* modal aplication */}

    {/* // divisoria geral */}
  
   </div>
   {showModal && (
    <div className="fixed inset-0 bg-black/60 w-full flex px-6 items-center justify-center sx:mx-auto">
      <form onSubmit={(e)=>{
        e.preventDefault()
        getCerticate()
      }} className="w-[640px] transition-all sx:w-[300px] z-50 ease-out lg:w-[640px] block items-center p-3 justify-center text-zinc-900 bg-zinc-50 rounded-xl px-5 py-6">
        <div className="flex justify-between items-center">
          <img className="size-18" src="/assets/charp.svg" alt="" />
          <X onClick={closeModal} className="size-7"/>

        </div>
        <div className="flex items-center justify-center pb-5">
        <img className="w-[50%] sx:hidden sm:block" src="/assets/people.svg" alt="" />
        <div className="flex flex-col flex-1 gap-5 font-Sans">
          <div>
          <label htmlFor="name" className="block text-xs font-medium mb-2">Nome:</label>
          <input value={name} required onChange={(e)=>{
            setName(e.target.value)
          }} type="text" id="name" name="name" className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
          </div>

          <div>
          <label htmlFor="email" className="block text-xs font-medium mb-2">E-mail:</label>
          <input value={email} required onChange={(e)=>{
            setEmail(e.target.value)
          }}  type="email" id="email" name="email" className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />
          </div>

          <div>
          <label htmlFor="number"  className="block text-xs font-medium mb-2"> Number:</label>
          <input value={number} required  onChange={(e)=>{
            setNumber(e.target.value)
          }}  type="tel" id="number" name="number" className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" />       
           </div>

           <button  className="block w-full px-3 py-2 text-sm border 
           bg-slate-900 text-white rounded-xl focus:outline-none focus:ring-zinc-500 
           focus:border-zinc-500" type="submit">
            {loading? "carregando...":"Obter"}
           </button>
         
        </div>
        </div>
       
      </form>
    </div>
   ) }
   </>
   
  )
}
export {App}