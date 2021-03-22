import { createGlobalStyle } from 'styled-components';

import robotoMono from './fonts/RobotoMono-VariableFont_wght.ttf';
import poppins from './fonts/Poppins-Medium.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: RobotoMono;
    src: url(${robotoMono});
  }
  @font-face {
    font-family: Poppins;
    src: url(${poppins});
  }
  html {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  p,h1, h2,h3,h4,h5,h6,span,div {
      user-select: none;
  }
`;

export default Typography;