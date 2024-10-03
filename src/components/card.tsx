"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
  button2 : string;
  secondButton: string,
  
};

export type Gallery19Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery19 = (props: Gallery19Props) => {
  const { heading, description, images , button2 , secondButton } = {
    ...Gallery19Defaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="">
      <div className="px-[5%] py-0 md:py-24 lg:py-28 -translate-y-28">
        <div className="container -translate-y-36">
          <div className="rb-12 mb-12  md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-8xl sfont-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md w-[945px]">{description}</p>
            <div className="flex gap-5 mt-8">
              <button className="bg-zinc-300 p-3 rounded-xl">{secondButton}</button>
              <button className= " text-zinc-900  hover:text-white transition-all ease-out hover:bg-zinc-600 p-3 rounded-xl">{button2}</button>
            </div>
          </div>
          {/* for all available options: https://www.embla-carousel.com/api/options/ */}
         <div className="w-full max-h-fit overflow-hidden ">
         <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <div className="relative w-full ">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                    <div className="w-full overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-square size-full object-cover bg-cover bg-center"
                      />
                      
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden bg-white md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden bg-white md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("relative mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-darker/40": current !== index + 1,
                  })}
                />
              ))}
            </div>
          </Carousel>
         </div>
        </div>
      </div>
    </section>
  );
};

export const Gallery19Defaults: Gallery19Props = {
  heading: "Descubra a Educação Espacial",
  description: "Inscreva-se agora e explore o fascinante mundo da educação espacial com nossos cursos inovadores.",
  button2: "Inscrever-se",
  secondButton: "Saiba mais",
  // Replace with your own image URLs and alt tags.
  images: [
    {
      src: "src/assets/ai-generated-illustration-satellite-system-spaceships-around-illumination-earth_441362-5418.avif",
      alt: "Relume placeholder image 1",
     
    },
    
    {
      src: "src/assets/maxresdefault.jpg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "src/assets/posters-astronomia.webp",
      alt: "Relume placeholder image 3",
    },
    {
      src: "src/assets/spatial.jpg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "src/assets/tecnology.jpeg",
      alt: "Relume placeholder image 5",
    },
    {
      src: "src/assets/modern-3d-isometric-concept-of-online-education-for-banner-website-realistic-landing-page-template-illustration-online-learning-internet-course-remote-tutorial-on-mobile-phone-application-free-vector.jpg",
      alt: "Relume placeholder image 6",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 7",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 8",
    },
  ],
};
