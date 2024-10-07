"use client";

import { Button, Tagline, Text, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";

import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageProps[];
};

export type Layoimportut421SlotProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout421Slot = (props: Layout421SlotProps) => {
  const { images } = {
    ...Layout421SlotDefaults,
    ...props,
  } as Props;

  const isMobile = useMediaQuery("(max-width: 479px)");

  const { scrollY, scrollYProgress } = useScroll();

  const halfViewportHeight = typeof window !== "undefined" ? window.innerHeight * 0.5 : 100;
  const opacity = useTransform(scrollY, [0, halfViewportHeight], [1, 0]);
  const scale = useTransform(scrollY, [0, halfViewportHeight], [1, 0.95]);

  const imageTransforms = isMobile
    ? [
        {},
        {
          translateX: useTransform(scrollYProgress, [0, 1], ["13%", "90%"]),
          translateY: useTransform(scrollYProgress, [0, 1], ["12%", "80%"]),
          rotateZ: useTransform(scrollYProgress, [0, 1], ["0.6deg", "4deg"]),
        },
        {
          translateX: useTransform(scrollYProgress, [0, 1], ["-12%", "-80%"]),
          translateY: useTransform(scrollYProgress, [0, 1], ["-12%", "-80%"]),
          rotateZ: useTransform(scrollYProgress, [0, 1], ["-3deg", "4deg"]),
        },
        {
          translateX: useTransform(scrollYProgress, [0, 1], ["17.5%", "120%"]),
          translateY: useTransform(scrollYProgress, [0, 1], ["-6%", "-40%"]),
          rotateZ: useTransform(scrollYProgress, [0, 1], ["-0.6deg", "-6deg"]),
        },
        {
          translateX: useTransform(scrollYProgress, [0, 1], ["-17.5%", "-120%"]),
          translateY: useTransform(scrollYProgress, [0, 1], ["9%", "60%"]),
          rotateZ: useTransform(scrollYProgress, [0, 1], ["4.6deg", "8deg"]),
        },
      ]
    : [
        {},
        {
          translateX: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]),
          rotateZ: useTransform(scrollYProgress, [0, 1], ["0deg", "-4deg"]),
        },
        {
          translateX: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]),
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]),
          rotateZ: "4deg",
        },
        {
          translateX: useTransform(scrollYProgress, [0, 1], ["0%", "140%"]),
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]),
          rotateZ: useTransform(scrollYProgress, [0, 1], ["0deg", "-12deg"]),
        },
        {
          translateX: useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]),
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]),
          rotateZ: "8deg",
        },
      ];

  return (
    <section id="relume" className="relative flex flex-col sx:mt-18 lg:mt-0">
      {/* Header */}
  

      {/* Images */}
      <div className="sticky top-0 z-10 -mt-20 flex h-[60svh] flex-col justify-center sm:mt-0 sm:h-[80svh] md:h-[70svh] lg:h-[120vh] lg:justify-normal">
        <div className="relative flex size-full items-center justify-center overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute w-full max-w-[55vw] md:max-w-[35vw] lg:max-w-[30vw]"
              style={imageTransforms[index]}
            >
              <img src={image.src} alt={image.alt} className="size-full" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 mt-[80vh] sm:mt-[100vh]" />
    </section>
  );
};

export const Layout421SlotDefaults: Layout421SlotProps = {
  slot1: [
    <Tagline key={1} className="mb-3 font-semibold md:mb-4" text="Tagline" />,
  
    <Text key={3}>
  
    </Text>,
    <div key={4} className="mt-6 flex justify-center gap-x-4 md:mt-8">
      <Button variant="secondary">Button</Button>
      <Button variant="link" size="link" iconRight={<RxChevronRight />}>
        Button
      </Button>
    </div>,
  ],
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
  ],
};
