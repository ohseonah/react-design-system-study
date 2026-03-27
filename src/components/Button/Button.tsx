import type {ButtonProps} from "./Button.types.ts";
import {_button_ButtonBasis} from "./Button.style.ts";

const Button = ({ variant='box', size= 'md', tone= 'primary' ,label , children ,...rest } : ButtonProps) => {
  return (
  <_button_ButtonBasis
    type='button'
    $variant={variant}
    $size={size}
    $tone={tone}
    {...rest}
  >
    {label ?? children}
  </_button_ButtonBasis>
      );
};

export default Button;


// ...rest = 내가 정의 안 한 나머지 props 다 전달