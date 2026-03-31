import { createGlobalStyle } from 'styled-components';
import {fontFaces} from "./fonts.ts";

const GlobalStyle = createGlobalStyle`
    /* font */
    ${fontFaces}
    
    /* Reset CSS */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        // 10px = 1rem
        font-size: 62.5%; 
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, li {
        list-style: none;
    }
    
    button,
    input,
    textarea,
    select {
        font: inherit;
    }
    
    button {
        cursor: pointer;
        border: none;
        background: none;
    }

    /* Global CSS (프로젝트 공통 스타일) */
    body {
        background-color: #fff; /* 예시: 배경색 지정 */
        color: #333;
        line-height: 1.5;
        font-family: 'GoogleSans', sans-serif;
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;