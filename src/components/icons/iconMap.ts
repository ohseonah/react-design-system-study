// iconMap.ts
import ArrowLeftO from "@/assets/icons/arrow-left-o.svg?react";
import Search from "@/assets/icons/search.svg?react"

export const iconMap = {
  arrow: ArrowLeftO,
  search: Search,
};

export type IconName = keyof typeof iconMap;