// styles/fonts.ts
import { css } from 'styled-components';

export const fontFaces = css`
  @font-face {
    font-family: 'GoogleSans';
    src: url('/src/assets/fonts/GoogleSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'GoogleSans';
    src: url('/src/assets/fonts/GoogleSans-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'GoogleSans';
    src: url('/src/assets/fonts/GoogleSans-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'GoogleSans';
    src: url('/src/assets/fonts/GoogleSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;