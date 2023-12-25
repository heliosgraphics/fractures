import type { FUIColors } from "./colors"

export interface FUITypographyUtility {
  children?: any;
  className?: string;
  color?: FUIColors;
  fontFamily?: "sans" | "serif" | "mono";
  fontStyle?: "italic" | "normal" | "oblique"
  fontWeight?: "thin" | "extra-light" | "light" | "normal" | "medium" | "semibold" | "bold" | "extra-bold" | "black"
  isEllipsis?: boolean
  isUnselectable?: boolean
  lineClamp?: number;
  onClick?: () => void;
  textAlign?: "left" | "right" | "center" | "justify"
  textDecoration?:
  | "delete"
  | "overline"
  | "underline"
  | "capitalize"
  | "lowercase"
  | "uppercase"
  whiteSpace?: "pre" | "pre-line" | "pre-wrap" | "nowrap"
  wordWrap?: "break-word"
}
