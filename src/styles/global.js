import { createGlobalStyle } from 'styled-components';
import BentonRegular from "../assets/fonts/BentonSansCondensedRegular.otf";
import BentonMedium from "../assets/fonts/BentonSansCondensedMedium.otf";
import BentonBold from "../assets/fonts/BentonSansCondensedBold.otf";
import BentonItalic from "../assets/fonts/BentonSansCondensedItalic.otf";
import BentonBlack from "../assets/fonts/BentonSansCondensedBlack.otf";


export default createGlobalStyle`

@font-face {
    font-family: 'Benton Sans';
    src: url(${BentonRegular}) format('otf'),
         url(${BentonMedium}) format('otf'),
         url(${BentonItalic}) format('otf'),
         url(${BentonBold}) format('otf'),
         url(${BentonBlack}) format('otf');
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Benton Sans', sans-serif;
  }
`;
