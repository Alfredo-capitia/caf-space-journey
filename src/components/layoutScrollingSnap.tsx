


type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  
  images: ImageProps[];
};

export type Header78Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>
export const Header78 = (props: Header78Props) => {
  const { heading, description, images } = {
    ...Header78Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:items-start lg:mb-20">
          <h1 className="mb-5 text-6xl w-[848px] font-bold md:mb-6 md:text-9xl  sx:text-3xl sx:w-[350px] lg:text-10xl lg:w-[848px] ">{heading}</h1>
          <p className="md:text-md sx:text-xs sx:w-full sx:px-8 lg:text-base lg:px-10 lg:w-[746px]">{description}</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          
          </div>
        </div>

        <div className="flex w-full justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-4">
            <div className="grid w-full animate-marquee-top auto-cols-fr grid-cols-2 gap-4 self-center">
              {[...new Array(2)].map((e, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-4">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-full pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    >
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))} 
                </div>
              ))}
            </div>
            <div className="grid w-full animate-marquee-bottom grid-cols-2 gap-4 self-center">
              {[...new Array(2)].map((e, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-4">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    >
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header78Defaults: Header78Props = {
  heading: "Como a Educação Espacial Funciona e Beneficia",
  description: " A educação espacial utiliza o universo como uma ferramenta   de aprendizado, estimulando a curiosidade e a imaginação dos alunos.  Ao explorar conceitos astronômicos, os estudantes desenvolvem habilidades    críticas e   criativas que se aplicam em diversas áreas do conhecimento.",
  
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 6",
    },
  ],
};
