import type { FUIScale } from './scale'

export interface FUIFlexProps {
  align?: 'center' | 'left' | 'right';
  draggable?: boolean
  gap?: FUIScale
  isAround?: boolean
  isBetween?: boolean
  isCentered?: boolean
  isColumn?: boolean
  isInline?: boolean
  isWrapping?: boolean
  isXCentered?: boolean
  isYCentered?: boolean
  padding?: FUIScale
  paddingX?: FUIScale
  paddingY?: FUIScale
  radius?: 1 | 2 | 3;
  yAlign?: 'top' | 'bottom' | 'baseline'
}
