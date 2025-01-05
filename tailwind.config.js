import { blackA, grass, green, indigo, gray, cyan, blue, jade} from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export const content = ['./**/*.vue'];
export const theme = {
  extend: {
    colors: {
      ...gray,
      ...blackA,
      ...grass,
      ...green,
      ...indigo, 
      ...cyan,
      ...blue,
      ...jade,
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], // Main Roboto font
      robotoThin: ['"Roboto Thin"', 'sans-serif'], // Roboto Thin (100)
      robotoLight: ['"Roboto Light"', 'sans-serif'], // Roboto Light (300)
      robotoRegular: ['"Roboto"', 'sans-serif'], // Roboto Regular (400)
      robotoMedium: ['"Roboto Medium"', 'sans-serif'], // Roboto Medium (500)
      robotoBold: ['"Roboto Bold"', 'sans-serif'], // Roboto Bold (700)
      robotoBlack: ['"Roboto Black"', 'sans-serif'], // Roboto Black (900)
      montserrat: ['Montserrat', 'sans-serif'], // Main Montserrat font
    },
  },
};
export const plugins = [];
