import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: ButtonProps;

};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  blogPosts: BlogPost[];
};

export type Blog44Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog44 = (props: Blog44Props) => {
  const { tagline, heading, description, blogPosts } = {
    ...Blog44Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-0 h-svh md:py-24 lg:py-28 -translate-y-44 sx:-translate-y-0">
      <div className="container">
        <div className="rb-12 mb-0 grid grid-cols-1 items-start justify-start gap-y-2
         md:mb-8 md:grid-cols-[1fr_max-content] md:items-end md:justify-between 
         md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="hidden flex-wrap items-center justify-end md:block">
        
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              className="flex size-full flex-col items-center justify-start border border-border-primary"
            >
              <div className="relative w-full overflow-hidden pt-[66%]">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex items-center">
                </div>

                <div className="flex w-full flex-col items-start justify-start">
                  <h2 className="mb-2 text-xl font-bold md:text-2xl">{post.title}</h2>
                  <p>{post.description}</p>
                  <Button
                    variant={post.button.variant}
                    size={post.button.size}
                    iconRight={post.button.iconRight}
                    iconLeft={post.button.iconLeft}
                    className="mt-6 flex items-center justify-center gap-x-1 hover:underline "
                  >
                    {post.button.title}
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const Blog44Defaults: Blog44Props = {
  tagline: "",
  heading: "",
  description: "",
  button: { title: "", variant: "secondary" },
  blogPosts: [
    {
      url: "https://ensino.digital/blog/a-importancia-da-pedagogia-especial-nas-escolas",
      image: {
        src: "src/assets/beneficio.jpg",
        alt: "Relume placeholder image 1",
      },
      category: "",
      readTime: "",
      title: "Benefícios da Educação Espacial para os Alunos",
      description:
        "Ela promove o engajamento e a motivação dos estudantes.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "https://educamundo.com.br/blog/como-a-educacao-especial-e-inclusiva-transforma-o-ensino-2/",
      image: {
        src: "src/assets/Estudar-e-Aprender-a-Distancia-7-1024x576.webp",
        alt: "Relume placeholder image 2",
      },
      category: "Category",
      readTime: "5 min read",
      title: "Como a Educação Espacial Transforma o Aprendizado",
      description:
        "Através de experiências práticas, os alunos se conectam com o conteúdo de forma significativa.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "https://porvir.org/astronomia-na-sala-de-aula-ideias-para-incluir-o-tema-no-curriculo/",
      image: {
        src: "src/assets/when-everything-goes-right-in-the-classroom-190612.jpg",
        alt: "Relume placeholder image 3",
      },
      category: "Category",
      readTime: "5 min read",
      title: "Explorando o Universo na Sala de Aula",
      description:
        "A educação espacial torna o aprendizado mais dinâmico e interativo.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
