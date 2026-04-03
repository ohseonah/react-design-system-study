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

/* button height size */
const sizeHeightStyle = {
  large : css`
    height: 5.6rem;
  `,
  medium : css`
    height: 4.8rem;
  `,
  small : css`
    height: 4rem;
  `,
  tiny : css`
    height: 3rem;
  `,
}

/* button min width size */
const minWidthStyle = {
  inline: {
    large: css`min-width: 12rem;`,
    medium: css`min-width: 10rem;`,
    small: css`min-width: 8rem;`,
    tiny: css`min-width: 6rem;`,
  },
  between: {
    large: css`min-width: 16rem;`,
    medium: css`min-width: 14rem;`,
    small: css`min-width: 12rem;`,
    tiny: css`min-width: 10rem;`,
  },
};

/* button padding ( size + layout ) */
const paddingStyle = {
  inline: {
    large: css`padding: 0 5rem`,
    medium: css`padding: 0 4.5rem`,
    small: css`padding: 0 3.7rem`,
    tiny: css`padding: 0 2.5rem`,
  },
  between:  {
    large: css`padding: 0 2.5rem`,
    medium: css`padding: 0 2rem`,
    small: css`padding: 0 1.2rem`,
    tiny: css`padding: 0 1rem`,
  },
}

/* button layout */
const iconLayoutStyle = {
  inline : css`
    justify-content: center;
    gap: 0.6rem;
  `,
  between : css`
    justify-content: space-between;
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
        color: ${toneColor.primary.onSolid};
        border-color: ${toneColor.primary.hover};
        background-color: ${toneColor.primary.main};
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
        color: ${toneColor.secondary.onSolid};
        border-color: ${toneColor.secondary.hover};
        background-color: ${toneColor.secondary.main};
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

export const _button_ButtonBase = styled.button<ButtonStyleProps>`
  /* structure */
  ${({ $size }) => sizeHeightStyle[$size]};
  ${({ $size, $iconLayout }) => paddingStyle[$iconLayout][$size]};
  ${({ $size, $iconLayout }) => minWidthStyle[$iconLayout][$size]};
  ${({ $iconLayout }) => iconLayoutStyle[$iconLayout]};
    
  /* appearance */
  ${({ $variant, $color }) => variantStyle[$variant][$color]};
  ${({ $radius }) => radiusStyle[$radius]};
   
  /* width */
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
  
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
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
