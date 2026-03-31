//Button.types.ts
import * as React from "react";

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'text';
export type ButtonSize = 'large' | 'medium' | 'small' | 'tiny';
export type ButtonTone = 'primary' | 'secondary';
export type ButtonRadius = 'pill' | 'curved' | 'soft' | 'square';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  radius?: ButtonRadius;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconLayout?: 'inline' | 'between';

  label?: string;
  children?: React.ReactNode;

  fullWidth?: boolean;
}

// 버튼 onCLick은 직접 정의 하는 것 보다는 기본 HTML 타입에 맡기는게 좋음
// 디자인 시스템 버튼은
//   - 클릭이 없는 버튼도 있어야 함.
//   - form submit도 있음
//   - disabled 상태 있음
//   - 링크처럼 쓸 수 있음