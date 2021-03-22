import { createGlobalStyle } from 'styled-components';

import robotoMono from './fonts/RobotoMono-VariableFont_wght.ttf';
import poppins from './fonts/Poppins-Medium.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${robotoMono}) format('ttf');
  }
  @font-face {
    font-family: Poppins;
    src: url(${poppins}) format('ttf');
  }
  html {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default Typography;