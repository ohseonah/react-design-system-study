// button.style.ts
import styled, {css} from "styled-components";
import type {ButtonColor, ButtonIconLayout, ButtonRadius, ButtonSize, ButtonVariant} from "./Button.types.ts";

interface ButtonStyleProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $color: ButtonColor;
  $radius: ButtonRadius;
  $iconLayout: ButtonIconLayout;
  $fullWidth: boolean;
  $isLoading: boolean;
}

/* button size */
const sizeStyle = {
  large : css`
    height: 5.6rem;
    padding: 0 5.2rem;
  `,
  medium : css`
    height: 4.8rem;
    padding: 0 4.7rem;
  `,
  small : css`
    height: 4rem;
    padding: 0 3.9rem;
  `,
  tiny : css`
    height: 3rem;
    padding: 0 2.7rem;
  `,
}

/* button tone */
const toneColor = {
  primary: {
    main: '#1447E6',
    hover: '#123FCC',
    pressed: '#1037B3',
    disabled: '#A9C2FF',
    onSolid: '#FFFFFF',
  },
  secondary: {
    main: '#46584B',
    hover: '#3D4D41',
    pressed: '#343F36',
    disabled: '#A2ABA5',
    onSolid: '#FFFFFF',
  },
}

/* button variant + tone (2차원 구조) */
const variantStyle = {
  solid: {
    primary: css`
      background: ${toneColor.primary.main};
      color: ${toneColor.primary.onSolid};
      border: 1px solid ${toneColor.primary.main};

      &:hover:not(:disabled) {
        background: ${toneColor.primary.hover};
        border-color: ${toneColor.primary.hover};
      }

      &:active:not(:disabled) {
        background: ${toneColor.primary.pressed};
        border-color: ${toneColor.primary.pressed};
      }

      &:disabled {
        background: ${toneColor.primary.disabled};
        border-color: ${toneColor.primary.disabled};
        color: ${toneColor.primary.onSolid};
        cursor: not-allowed;
      }
    `,
    secondary: css`
      background: ${toneColor.secondary.main};
      color: ${toneColor.secondary.onSolid};
      border: 1px solid ${toneColor.secondary.main};

      &:hover:not(:disabled) {
        background: ${toneColor.secondary.hover};
        border-color: ${toneColor.secondary.hover};
      }

      &:active:not(:disabled) {
        background: ${toneColor.secondary.pressed};
        border-color: ${toneColor.secondary.pressed};
      }

      &:disabled {
        background: ${toneColor.secondary.disabled};
        border-color: ${toneColor.secondary.disabled};
        color: ${toneColor.secondary.onSolid};
        cursor: not-allowed;
      }
    `,
  },

  outline: {
    primary: css`
      background: transparent;
      color: ${toneColor.primary.main};
      border: 1px solid ${toneColor.primary.main};

      &:hover:not(:disabled) {
        color: ${toneColor.primary.hover};
        border-color: ${toneColor.primary.hover};
      }

      &:active:not(:disabled) {
        color: ${toneColor.primary.pressed};
        border-color: ${toneColor.primary.pressed};
      }

      &:disabled {
        background: transparent;
        color: ${toneColor.primary.disabled};
        border-color: ${toneColor.primary.disabled};
        cursor: not-allowed;
      }
    `,
    secondary: css`
      background: transparent;
      color: ${toneColor.secondary.main};
      border: 1px solid ${toneColor.secondary.main};

      &:hover:not(:disabled) {
        color: ${toneColor.secondary.hover};
        border-color: ${toneColor.secondary.hover};
      }

      &:active:not(:disabled) {
        color: ${toneColor.secondary.pressed};
        border-color: ${toneColor.secondary.pressed};
      }

      &:disabled {
        background: transparent;
        color: ${toneColor.secondary.disabled};
        border-color: ${toneColor.secondary.disabled};
        cursor: not-allowed;
      }
    `,
  },

  ghost: {
    primary: css`
      background: transparent;
      color: ${toneColor.primary.main};
      border: 1px solid transparent;

      &:hover:not(:disabled) {
        background: rgba(20, 71, 230, 0.08);
        color: ${toneColor.primary.hover};
      }

      &:active:not(:disabled) {
        background: rgba(20, 71, 230, 0.16);
        color: ${toneColor.primary.pressed};
      }

      &:disabled {
        background: transparent;
        color: ${toneColor.primary.disabled};
        cursor: not-allowed;
      }
    `,
    secondary: css`
      background: transparent;
      color: ${toneColor.secondary.main};
      border: 1px solid transparent;

      &:hover:not(:disabled) {
        background: rgba(70, 88, 75, 0.08);
        color: ${toneColor.secondary.hover};
      }

      &:active:not(:disabled) {
        background: rgba(70, 88, 75, 0.16);
        color: ${toneColor.secondary.pressed};
      }

      &:disabled {
        background: transparent;
        color: ${toneColor.secondary.disabled};
        cursor: not-allowed;
      }
    `,
  },

  text: {
    primary: css`
      background: transparent;
      color: ${toneColor.primary.main};
      border: 1px solid transparent;

      &:hover:not(:disabled) {
        color: ${toneColor.primary.hover};
      }

      &:active:not(:disabled) {
        color: ${toneColor.primary.pressed};
      }

      &:disabled {
        color: ${toneColor.primary.disabled};
        cursor: not-allowed;
      }
    `,
    secondary: css`
      background: transparent;
      color: ${toneColor.secondary.main};
      border: 1px solid transparent;

      &:hover:not(:disabled) {
        color: ${toneColor.secondary.hover};
      }

      &:active:not(:disabled) {
        color: ${toneColor.secondary.pressed};
      }

      &:disabled {
        color: ${toneColor.secondary.disabled};
        cursor: not-allowed;
      }
    `,
  },
}

/* button radius */
const radiusStyle = {
  pill : css`border-radius: 999px`,
  curved : css`border-radius: 1.6rem`,
  soft : css`border-radius: 0.8rem`,
  square : css`border-radius: 0`,
}

/* button layout */
const iconLayoutStyle = {
  inline : css``,
  between : css``,
}

export const _button_ButtonBase = styled.button<ButtonStyleProps>`
  ${({ $size }) => sizeStyle[$size]};
  ${({ $variant, $color }) => variantStyle[$variant][$color]};
  ${({ $radius }) => radiusStyle[$radius]};
  ${({ $iconLayout }) => iconLayoutStyle[$iconLayout]};
    
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
  
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

/* button text size */
const labelFontSize = {
  large: '1.6rem',
  medium: '1.4rem',
  small: '1.2rem',
  tiny: '1rem',
}

export const _span_Label = styled.span<{$size: ButtonSize}>`
    white-space: nowrap;
    font-size: ${({ $size }) => labelFontSize[$size]};
`;

export const _span_Icon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;