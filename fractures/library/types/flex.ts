import type { FUIScale } from '@fractures/library/types/scale'

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
  radius?: 1 | 2 | 3;
  yAlign?: 'top' | 'bottom' | 'baseline'
}
