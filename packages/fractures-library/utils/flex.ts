import type { FUIFlexProps } from '@fractures/library/types/flex'

export const getFlexUtility = (props: FUIFlexProps, className?: string): string => {
  const flexClasses: Array<string> = []

  if (props?.isInline) flexClasses.push('inline-flex')
  else flexClasses.push('flex')

  if (!props) return flexClasses.join(" ")

  if (props.isCentered) flexClasses.push('flex-center')
  if (props.isColumn) flexClasses.push('flex-column')
  if (props.isWrapping) flexClasses.push('flex-wrap')
  if (props.isYCentered) flexClasses.push('flex-y-center')
  if (props.isXCentered) flexClasses.push('flex-x-center')
  if (props.yAlign === 'baseline') flexClasses.push('flex-baseline')
  if (props.yAlign === 'top') flexClasses.push('flex-top')
  if (props.yAlign === 'bottom') flexClasses.push('flex-bottom')
  if (props.align === 'left') flexClasses.push('flex-left')
  if (props.align === 'right') flexClasses.push('flex-right')
  if (props.isBetween) flexClasses.push('space-between')
  if (props.isAround) flexClasses.push('space-around')

  if (props.gap || props.gap === 0) flexClasses.push(`flex-gap-${props.gap}`)
  if (props.padding || props.padding === 0) flexClasses.push(`p-${props.padding}`)
  if (props.radius) flexClasses.push(`radius-${props.radius}`)

  if (className) flexClasses.push(className)

  return flexClasses.join(" ")
}
