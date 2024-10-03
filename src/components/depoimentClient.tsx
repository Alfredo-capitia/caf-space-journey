"use client";

import type { ButtonProps, CarouselApi } from "@relume_io/relume-ui";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  logo: ImageProps;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial23Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial23 = (props: Testimonial23Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial23Defaults,
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
    <section id="relume" className="px-[5%] py-0 md:py-24 lg:py-28 -translate-y-72">
      <div className="container -translate-y-16">
        <div className="container mb-8 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            duration: 20,
            align: "start",
          }}
          className="overflow-hidden bg-background-primary md:px-3.5"
        >
          <CarouselContent className="ml-0 md:flex-row">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3"
              >
                <div className="flex w-full flex-col items-start justify-between border
                 border-border-primary 
                p-6 md:p-8">
                  <div className="rb-12 mb-12">
                    <img
                      className="max-h-12"
                      src={testimonial.logo.src}
                      alt={testimonial.logo.alt}
                    />
                  </div>
                  <blockquote className="mb-5 md:mb-6 md:text-md">{testimonial.quote}</blockquote>
                  <div className="flex w-full flex-col items-start text-left 
                  md:w-fit md:flex-row md:items-center">
                    <img
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt}
                      className="mb-4 mr-0 size-12 min-h-12 min-w-12 
                      rounded-full object-cover md:mb-0 md:mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>
                        {testimonial.position}, {testimonial.companyName}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 py-1 md:mt-8">
                    <Button
                      variant={testimonial.button.variant}
                      size={testimonial.button.size}
                      iconRight={testimonial.button.iconRight}
                      iconLeft={testimonial.button.iconLeft}
                      className="gap-2.5"
                    >
                      {testimonial.button.title}
                    </Button>
                  </div>
                </div>
              </CarouselItem>))}
          </CarouselContent>
          <CarouselPrevious className="-mt-0 hidden bg-white md:flex md:size-12 lg:size-14" />
          <CarouselNext className="-mt-2 hidden bg-white md:flex md:size-12 lg:size-14" />
        </Carousel>
        <div className="flex items-center justify-center pt-[30px] sm:pt-[30px]">
          {testimonials.map((_, index) => (
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
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const Testimonial23Defaults: Testimonial23Props = {
  heading: "Customer testimonials",

  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Testimonial logo 1",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
        alt: "Testimonial logo 2",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Testimonial logo 3",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
        alt: "Testimonial logo 4",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 4",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Testimonial logo 5",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 5",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
        alt: "Testimonial logo 6",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 6",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
