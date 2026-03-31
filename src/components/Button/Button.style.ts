// Button.style.ts
import styled from "styled-components";
import type {ButtonRadius, ButtonSize, ButtonTone, ButtonVariant} from "./Button.types.ts";

interface ButtonStyleProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $tone: ButtonTone;
  $radius: ButtonRadius;
  $fullWidth: boolean;
}

export const _button_ButtonBase = styled.button<ButtonStyleProps>``;


/* button size */
// const sizeStyle = {
//   sm: css`
//     height: 4rem;
//       padding: 0 2.5rem;
//       font-size: 1.4rem;
//   `,
//   md: css`
//     height: 4.7rem;
//       padding: 0 3.5rem;
//       font-size: 1.5rem;
//   `,
//   lg: css`
//     height: 5.5rem;
//       padding: 0 4.5rem;
//       font-size: 1.6rem;
//   `,
// }
//
// /* button radius */
// const radiusStyle = {
//   pill: css`
//     border-radius: 9999px;
//   `,
//   curved: css`
//     border-radius: 1.6rem;
//   `,
//   soft: css`
//     border-radius: 0.8rem;
//   `,
//   square: css`
//     border-radius: 0;
//   `,
// }
//
// /* button tone */
// const toneStyle = {
//   primary: {
//     solid: {
//       bg: '#46584B',
//       hover: '#3d4d41',
//       active: '#343f36',
//       text: '#fff',
//       border: '#46584B',
//     },
//     outline: {
//       bg: '#fff',
//       hover: '#f3f4f6',
//       active: '#e5e7eb',
//       text: '#46584B',
//       border: '#46584B',
//     },
//     text: {
//       bg: 'transparent',
//       hover: '#f3f4f6',
//       active: '#e5e7eb',
//       text: '#46584B',
//       border:'transparent',
//     },
//   },
//
//   secondary: {
//     solid: {
//       bg: '#A2ABA5',
//       hover: '#8f9992',
//       active: '#7b867e',
//       text: '#fff',
//       border: '#A2ABA5',
//     },
//     outline: {
//       bg: '#fff',
//       hover: '#f3f4f6',
//       active: '#e5e7eb',
//       text: '#A2ABA5',
//       border: '#A2ABA5',
//     },
//     text: {
//       bg: 'transparent',
//       hover: '#f3f4f6',
//       active: '#e5e7eb',
//       text: '#A2ABA5',
//       border:'transparent',
//     },
//   },
// };
//
// const getVariantStyle = (variant: ButtonVariant, tone: ButtonTone) => {
//   const color = toneStyle[tone][variant];
//
//   return css`
//     background-color: ${color.bg};
//     color: ${color.text};
//     border: 1px solid ${color.border};
//     transition: 0.2s ease;
//
//     &:hover:not(:disabled) {
//       background-color: ${color.hover};
//     }
//
//     &:active:not(:disabled) {
//       background-color: ${color.active};
//     }
//   `;
// };
//
// export const _button_ButtonBasis = styled.button<ButtonStyleProps>`
//     ${({$size}) => sizeStyle[$size]}
//     ${({$radius}) => radiusStyle[$radius]}
//     ${({$variant, $tone}) => getVariantStyle($variant, $tone)}
//
//     width: ${({$fullWidth}) => $fullWidth ? '100%' : 'auto'};
// `;