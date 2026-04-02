// iconMap.ts

const iconModules = import.meta.glob('@/assets/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
});

const normalizeIconName = (path: string)  => {
  return path
  .split('/')
  .pop()
  ?.replace('.svg', '')
  .replace(/\s+/g, '')
  .toLowerCase() ?? '';
};

export const iconMap = Object.fromEntries(
    Object.entries(iconModules).map(([path, module]) => {
      const iconName = normalizeIconName(path);
      return [iconName, module];
    }),
);



// import ArrowLeftO from "@/assets/svg/arrow-left-o.svg?react";
// import Search from "@/assets/svg/search.svg?react"
//
// export const iconMap = {
//   arrow: ArrowLeftO,
//   search: Search,
// };
//
// export type IconName = keyof typeof iconMap;