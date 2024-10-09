import { SemanticClassificationFormat } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
    fontFamily : {
      mono:'jetBrains Mono',
      Sans : 'inter'
    },
    backgroundImage : {
      pattern:'url(/assets/novologo.png)',
      wapper : 'url(/assets/space.gif)' ,
      therciaty: 'url(/assets/beneficio.jpg)',
      Second: 'url(/assets/crap.svg)',
      firsty: 'url(/assets/people.svg)',
      lua: 'url(/assets/lua2.png)'
    },
    screens: {
      sx:"360px",
      sm: "768px",
      md: "1060px",
      lg: "1114px",
      xl: "1700px",
    },
    },
  },
  plugins: [],
}

