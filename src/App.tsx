// App.tsx (전체 화면 구성 UI)
import { Routes, Route } from 'react-router-dom';
import GuidePage from './guide/GuidePage';
import GlobalStyle from "./styles/GlobalStyle.ts";

function App() {
  return (
      <>
        {/* 전역 스타일 */}
        <GlobalStyle />

        {/* 라우터 */}
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/guide" element={<GuidePage />} />
        </Routes>
      </>
  );
}

export default App;