// Button.tsx
import {_button_ButtonBase, _span_Label} from "./Button.style.ts";
import type {ButtonProps} from "./Button.types.ts";

const Button = ({
    type='button',
    variant='solid',
    size='medium',
    color='primary',
    radius='square',
    iconLayout='inline',
    fullWidth=false,
    ...p}:ButtonProps) => {
  return (
      <>
        <_button_ButtonBase
            type={type}
            $variant={variant}
            $size={size}
            $color={color}
            $radius={radius}
            $fullWidth={fullWidth}
            $iconLayout={iconLayout}
            {...p}
        >
          {p.leftIcon && <span>{p.leftIcon}</span>}
          {p.children && <_span_Label $size={size}>{p.children}</_span_Label>}
          {p.rightIcon && <span>{p.rightIcon}</span>}
        </_button_ButtonBase>
      </>
  );
};

export default Button;

// ...rest = 내가 정의 안 한 나머지 props 다 전달