// Button.tsx
import type {ButtonProps} from "./Button.types.ts";
import {_button_ButtonBase} from "./Button.style.ts";

const Button = ({ variant= 'solid', size='medium', tone='primary', radius='square', label ,children,leftIcon,rightIcon,...rest } : ButtonProps) => {
  return (
<>
<_button_ButtonBase
  type='button'
  $variant={variant}
  $size={size}
  $tone={tone}
  $radius={radius}
  {...rest}
>
  {leftIcon ?? <span></span>}
  {label ?? children}
  {rightIcon?? <span></span>}
</_button_ButtonBase>
</>
      );
};

export default Button;


// ...rest = 내가 정의 안 한 나머지 props 다 전달