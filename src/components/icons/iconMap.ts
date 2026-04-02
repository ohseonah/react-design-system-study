// iconMap.ts
import ArrowLeftO from "@/assets/svg/arrow-left-o.svg?react";
import Search from "@/assets/svg/search.svg?react"

export const iconMap = {
  arrow: ArrowLeftO,
  search: Search,
};

export type IconName = keyof typeof iconMap;