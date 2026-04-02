// Icon.types.ts
import type {IconName} from "./iconMap.ts";

export type IconSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconTone = 'default' | 'gray' | 'current';
// current는 부모 글자색 따라가게 할 때 사용


export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: IconSize;
  tone?: IconTone;
}