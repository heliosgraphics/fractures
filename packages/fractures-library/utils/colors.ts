import type { FUIColors } from "@fractures/library/types/colors"

export const getColor = (
  color: FUIColors,
  colorTone: 100 | 300 | 500 | 700 | 900 = 500
): string | undefined => {
  switch (color) {
    case "aqua": return `aqua-${colorTone}`
    case "blue": return `blue-${colorTone}`
    case "gray": return `gray-${colorTone}`
    case "green": return `green-${colorTone}`
    case "orange": return `orange-${colorTone}`
    case "pink": return `pink-${colorTone}`
    case "purple": return `purple-${colorTone}`
    case "red": return `red-${colorTone}`
    case "yellow": return `yellow-${colorTone}`

    case "lightest-aqua": return "aqua-100"
    case "lightest-blue": return "blue-100"
    case "lightest-gray": return "gray-100"
    case "lightest-green": return "green-100"
    case "lightest-orange": return "orange-100"
    case "lightest-pink": return "pink-100"
    case "lightest-purple": return "purple-100"
    case "lightest-red": return "red-100"
    case "lightest-yellow": return "yellow-100"

    case "light-aqua": return "aqua-300"
    case "light-blue": return "blue-300"
    case "light-gray": return "gray-300"
    case "light-green": return "green-300"
    case "light-orange": return "orange-300"
    case "light-pink": return "pink-300"
    case "light-purple": return "purple-300"
    case "light-red": return "red-300"
    case "light-yellow": return "yellow-300"

    case "dark-aqua": return "aqua-700"
    case "dark-blue": return "blue-700"
    case "dark-gray": return "gray-700"
    case "dark-green": return "green-700"
    case "dark-orange": return "orange-700"
    case "dark-pink": return "pink-700"
    case "dark-purple": return "purple-700"
    case "dark-red": return "red-700"
    case "dark-yellow": return "yellow-700"

    case "darkest-aqua": return "aqua-900"
    case "darkest-blue": return "blue-900"
    case "darkest-gray": return "gray-900"
    case "darkest-green": return "green-900"
    case "darkest-orange": return "orange-900"
    case "darkest-pink": return "pink-900"
    case "darkest-purple": return "purple-900"
    case "darkest-red": return "red-900"
    case "darkest-yellow": return "yellow-900"

    case "currentcolor": return "currentcolor"

    default: undefined
  }
}
