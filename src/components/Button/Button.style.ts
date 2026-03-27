import styled from "styled-components";
import type {ButtonSize, ButtonTone, ButtonVariant} from "./Button.types.ts";

interface ButtonStyleProps {
  $variant: ButtonVariant;
  $size?: ButtonSize;
  $tone?: ButtonTone;
}

export const _button_ButtonBasis = styled.button<ButtonStyleProps>``;