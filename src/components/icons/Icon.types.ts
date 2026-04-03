// Icon.types.ts
import type { SVGProps } from 'react';
import { iconMap } from './iconMap';

export type IconName = keyof typeof iconMap;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconTone = 'default' | 'gray' | 'current' | 'white';
// current는 부모 글자색 따라가게 할 때 사용


export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: IconSize;
  tone?: IconTone;
}