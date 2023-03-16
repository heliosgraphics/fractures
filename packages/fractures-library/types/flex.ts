import type { FUIScale } from '@fractures/library/types/scale'

export interface FUIFlexProps {
  align?: 'center' | 'left' | 'right';
  children?: React.ReactNode
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
  onClick?: (event: React.MouseEvent) => void
  padding?: FUIScale
  radius?: 1 | 2 | 3;
  yAlign?: 'top' | 'bottom' | 'baseline'
}
