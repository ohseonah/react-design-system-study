// iconMap.ts
import type { FC, SVGProps } from "react";

export type SvgComponent = FC<SVGProps<SVGSVGElement>>;

// @/assets/icons  폴더 안에 있는 .svg 파일을 전부 가지고는 코드
const iconModules = import.meta.glob('@/assets/svg/*.svg', {
  eager: true,  // 바로 import
  query: '?react',  // svg를 react 컴포넌트로
  import: 'default',  // default export 가져옴
}) as Record<string, SvgComponent>;

// 파일 경로 > 아이콘 이름으로 변환
{/*
  [변환 과정]
  .split('/') → ["src", "assets", "icons", "arrow-left.svg"]
  .pop() → "arrow-left.svg"
  .replace('.svg', '') → "arrow-left"
  .toLowerCase() → "arrow-left"
*/}
const normalizeIconName = (filepath: string)  => {
  return (
      filepath
      .split('/')
      .pop()
      ?.replace('.svg','')
      .replace(/\s+/g,'')
      .toLowerCase() ?? ''
  );
};

const entries = Object.entries(iconModules).map(([filePath, svgComponent]) => {
  const iconName = normalizeIconName(filePath);
  return [iconName, svgComponent] as const;
});

export const iconMap = Object.fromEntries(entries) as Record<string, SvgComponent>;



// import ArrowLeftO from "@/assets/svg/arrow-left-o.svg?react";
// import Search from "@/assets/svg/search.svg?react"
//
// export const iconMap = {
//   arrow: ArrowLeftO,
//   search: Search,
// };
//
// export type IconName = keyof typeof iconMap;