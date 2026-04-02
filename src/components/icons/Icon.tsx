//Icon.tsx
import type {IconProps, IconSize, IconTone} from "./Icon.types.ts";
import {iconMap} from "./iconMap.ts";

const ICON_SIZE_MAP: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
};

const ICON_TONE_MAP: Record<IconTone, string> = {
  default: '#333',
  gray: '#999',
  current: 'currentColor',
};


const Icon = ({name, size = 'sm', tone= 'default', ...p}: IconProps) => {
  const SvgIcon = iconMap[name];

  if (!SvgIcon) return null;

  return (
  <SvgIcon
    width={ICON_SIZE_MAP[size]}
    height={ICON_SIZE_MAP[size]}
    color={ICON_TONE_MAP[tone]}
    {...p}
  />
      );
};

export default Icon;

// Record 사용하는 이유?
//  - 이 타입에 있는 키를 전부 강제하고 싶을 때 쓰는 타입
//  - 예를 들면,

// const ICON_SIZE_MAP = {
//   xs: 12,
//   sm: 16,
//   md: 20,
//   lg: 24,
// }; 이렇게도 동작은 하지만, 문제는 아래 코드 처럼 저렇게 type이 선언되어 있는데

// type IconSize = 'xs' | 'sm' | 'md' | 'lg';

// const ICON_SIZE_MAP = {
//   xs: 12,
//   sm: 16,
//   md: 20,
//   // lg 빠짐
// }; lg 사이즈가 빠져 있어도 TS가 이 오류눈 못 잡을 수도 있음

// 즉, 타입이랑 실제 데이터가 어긋나도 모름, Record 사용 시, 타입이랑 실제 값이 100% 동기화 되서 타입 빠지면 오류남