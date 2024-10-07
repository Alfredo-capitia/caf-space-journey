import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"



function FooterComponet() {
    return(
        <>
          <footer className="translate-y-0 border-y-2 sx:mt-28 lg:mt-0 border-t-background-alternative py-8 font-Sans">
          <div className="flex lg:px-9 justify-between items-center translate-y-9 pb-12 sx:block lg:flex sx:py-8 sx:gap-10 sx:items-start">
            <div className="flex flex-col gap-7 sx:mb-10 lg:mb-0">
              <div className="flex flex-col gap-9">
              <div className="bg-pattern size-24 bg-cover object-cover"></div>
              
              <p className="w-[589px] sx:w-full ">Inscreva-se em nosso boletim para ficar por dentro de novidades e lançamentos.</p>

              <form className=" flex gap-3 sx:block lg:flex lg:gap-3" action="">
                <input className="bg-zinc-200 p-3 sx:mb-2 lg:mb-0 sx:w-full lg:w-fit rounded-2xl outline-none text-black" type="text" placeholder="Digite o seu Gmail" />
                <button className="bg-zinc-950 text-white p-3 sx:w-full lg:w-fit rounded-2xl" type="submit">Inscrever-se</button>
              </form>

              </div>
              
            </div>

            <div className="flex flex-col gap-4 sx:mb-10 lg:mb-0">
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
        <div className="font-Sans flex justify-between item-center py-2 sx:block lg:flex">
          <div className="flex gap-2 text-zinc-600 sx:block lg:flex">
          <p className="sx:mb-2 lg:mb-0">@  2024 Nucleo.com.</p>
          <p className="sx:mb-2 lg:mb-0"> Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center gap-3 text-zinc-600 sx:block lg:flex sx:items-start">
            <p className="sx:mb-2 lg:mb-0">Politica de Privacidade </p>
            <p>Termos de uso</p>
          </div>
        </div>
        </>
    )
}
export {FooterComponet}

