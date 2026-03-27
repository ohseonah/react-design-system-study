import * as React from "react";

export type ButtonVariant = 'box' | 'solid' | 'round';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  // onClick: () => void; // onClick 필수 선언
}

// 버튼 onCLick은 직접 정의 하는 것 보다는 기본 HTML 타입에 맡기는게 좋음
// 디자인 시스템 버튼은
//   - 클릭이 앖는 버튼도 있어야 함.
//   - form submit도 있음
//   - disabled 상태 있음
//   - 링크처럼 쓸 수 있음