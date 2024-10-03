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
      pattern:'url(src/assets/novologo.png)',
      wapper : 'url(src/assets/space.gif)' ,
      therciaty: 'url(src/assets/beneficio.jpg)'
    }
    },
  },
  plugins: [],
}

