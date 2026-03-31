import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, li {
        list-style: none;
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
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;