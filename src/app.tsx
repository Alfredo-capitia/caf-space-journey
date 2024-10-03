 import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Gallery19 } from "./components/card"
import { Blog44 } from "./components/cardInformation"
import { Testimonial23 } from "./components/depoimentClient"


function App() {
  return (
      // {/* // divisoria geral */}
    <div className="w-full h-screen pl-14 pr-14">
      {/* header aplication */}
      <header className="h-42 flex items-center justify-between 
      w-full bg-white pt-4">
      <div className="bg-pattern h-24 w-24 bg-cover object-cover"></div>
      <div>
        <button className="bg-zinc-300 p-3 rounded-xl text-base
         text-zinc-900 hover:bg-zinc-200 transition-all
          ease-in">Obter Certificado</button>
      </div>
      </header>
      {/* header aplication */}
      {/* content aplication */}
      <section className="block items-center justify-center mt-3">
        {/* exploring content */}
        <div className="flex items-center">
          <div className="w-[650px] block items-center justify-center mt-24">
            <h1 className="text-5xl text-left  w-[610px] font-medium
             leading-tight
             -tracking-normal">Explorando o Futuro da Educação Espacial</h1>
            <p className="w-[500px] pt-8">Nossa missão é inspirar e 
              capacitar as novas gerações atravé
              s do conhecimento sobre o espaço. Junte-se a nós nessa jornada
               de descobertas e inovações que moldam o futuro da educação.</p>
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
        <div className="flex flex-col gap-y-6 items-center justify-center pt-32">
          <p>Educação</p>
          <h1 className="text-5xl font-bold text-center w-[600px] 
             leading-tight
             -tracking-normal">Como a Educação Espacial Funciona e Beneficia</h1>
          <p className="w-[450px] text-center ">A educação espacial utiliza o universo como uma ferramenta 
            de aprendizado, estimulando a curiosidade e a imaginação dos alunos.
             Ao explorar conceitos astronômicos, os estudantes desenvolvem habilidades 
             críticas e 
            criativas que se aplicam em diversas áreas do conhecimento.</p>
        </div>
        {/* education content  */}
        {/* card content  */}
        <div className="flex items-center justify-center pt-2">
        </div>
        {/* card content  */}
  <Blog44 />
  
  <Gallery19/>
  <Testimonial23 />
        </section>
       <div className="px-18">
          
       <footer className="-translate-y-96 border-y-2 border-t-background-alternative py-8 font-Sans">
          <div className="flex justify-between items-center ">
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

       </div>
      

      {/* content aplication */}

      
    {/* // divisoria geral */}

   </div>
   
  )
}

export {App}
