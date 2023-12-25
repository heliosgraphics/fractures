import type { FUITypographyUtility } from 'library/types/typography'

export const _getFontWeight = (fw: FUITypographyUtility['fontWeight']): string => {
  switch (fw) {
    case 'thin': return 'fw-thin';
    case 'extra-light': return 'fw-extra-light';
    case 'light': return 'fw-light';
    case 'normal': return 'fw-normal';
    case 'medium': return 'fw-medium';
    case 'semibold': return 'fw-semi-bold';
    case 'bold': return 'fw-bold';
    case 'extra-bold': return 'fw-extra-bold';
    case 'black': return 'fw-black';

    default: return '';
  }
}

export const getTypographyUtility = (props: FUITypographyUtility, className?: string): string => {
  const typoClasses: Array<string> = []

  const fontFamily = props.fontFamily ? props.fontFamily : "sans"
  const fontWeight = _getFontWeight(props.fontWeight)

  typoClasses.push(fontFamily)
  typoClasses.push(fontWeight)

  if (className) typoClasses.push(className)
  if (props.fontStyle) typoClasses.push(props.fontStyle)
  if (props.isEllipsis) typoClasses.push("ellipsis")
  if (props.isUnselectable) typoClasses.push("unselectable")
  if (props.textAlign) typoClasses.push(props.textAlign)
  if (props.textDecoration) typoClasses.push(props.textDecoration)
  if (props.whiteSpace) typoClasses.push(props.whiteSpace)
  if (props.wordWrap) typoClasses.push(props.wordWrap)

  return typoClasses.join(" ")
}
