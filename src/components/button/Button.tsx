// button.tsx
import {_button_ButtonBase, _span_Label} from "./Button.style.ts";
import type {ButtonProps} from "./Button.types.ts";
import Spinner from "../loading/Spinner.tsx";
import Icon from "../icons/Icon.tsx";

const Button = ({
    type='button',
    variant='solid',
    size='medium',
    color='primary',
    radius='square',
    iconLayout='inline',
    fullWidth=false,
    isLoading=false,
    disabled,
    ...p}:ButtonProps) => {
  return (
        <_button_ButtonBase
            type={type}
            disabled={disabled || isLoading}
            $variant={variant}
            $size={size}
            $color={color}
            $radius={radius}
            $fullWidth={fullWidth}
            $iconLayout={iconLayout}
            $isLoading={isLoading}
            {...p}
        >
          {p.leftIcon && <Icon name={p.leftIcon} />}
          {p.children && (
              <_span_Label $size={size}>
                {isLoading ? <Spinner /> : p.children}
              </_span_Label>
          )}
          {/*{p.children && <_span_Label $size={size}>{p.children} {isLoading && <span>Loading Test</span>}</_span_Label>}*/}
          {p.rightIcon && <Icon name={p.rightIcon} />}
        </_button_ButtonBase>
  );
};

export default Button;

// ...rest = 내가 정의 안 한 나머지 props 다 전달