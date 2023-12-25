import type { FUIFlexProps } from 'library/types/flex'

export const getFlexUtility = (props: FUIFlexProps, className?: string): string => {
  if (!props) return "flex";

  const flexClasses = new Set<string>()
  const flexBase = props?.isInline ? 'inline-flex' : 'flex'

  flexClasses.add(flexBase)

  if (props.isCentered) flexClasses.add('flex-center')
  if (props.isColumn) flexClasses.add('flex-column')
  if (props.isWrapping) flexClasses.add('flex-wrap')
  if (props.isYCentered) flexClasses.add('flex-y-center')
  if (props.isXCentered) flexClasses.add('flex-x-center')
  if (props.yAlign === 'baseline') flexClasses.add('flex-baseline')
  if (props.yAlign === 'top') flexClasses.add('flex-top')
  if (props.yAlign === 'bottom') flexClasses.add('flex-bottom')
  if (props.align === 'left') flexClasses.add('flex-left')
  if (props.align === 'right') flexClasses.add('flex-right')
  if (props.isBetween) flexClasses.add('space-between')
  if (props.isAround) flexClasses.add('space-around')

  if (props.gap || props.gap === 0) flexClasses.add(`flex-gap-${props.gap}`)
  if (props.padding || props.padding === 0) flexClasses.add(`p-${props.padding}`)
  if (props.paddingY || props.paddingY === 0) flexClasses.add(`py-${props.paddingY}`)
  if (props.paddingX || props.paddingX === 0) flexClasses.add(`px-${props.paddingX}`)
  if (props.radius) flexClasses.add(`radius-${props.radius}`)

  if (className) flexClasses.add(className)

  return Array.from(flexClasses).join(" ")
}
