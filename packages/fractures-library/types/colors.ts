export type FUIColorScale =
  | "aqua"
  | "blue"
  | "gray"
  | "green"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow"

export type FUIColors =
  | FUIColorScale
  | "dark-aqua"
  | "dark-blue"
  | "dark-gray"
  | "dark-green"
  | "dark-orange"
  | "dark-pink"
  | "dark-purple"
  | "dark-red"
  | "dark-yellow"
  | "light-aqua"
  | "light-blue"
  | "light-gray"
  | "light-green"
  | "light-orange"
  | "light-pink"
  | "light-purple"
  | "light-red"
  | "light-yellow"
  | "darkest-aqua"
  | "darkest-blue"
  | "darkest-gray"
  | "darkest-green"
  | "darkest-orange"
  | "darkest-pink"
  | "darkest-purple"
  | "darkest-red"
  | "darkest-yellow"
  | "lightest-aqua"
  | "lightest-blue"
  | "lightest-gray"
  | "lightest-green"
  | "lightest-orange"
  | "lightest-pink"
  | "lightest-purple"
  | "lightest-red"
  | "lightest-yellow"
  | "currentcolor"

export interface FUIColorScaleOptions {
  0?: string;
  25?: string;
  50?: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000?: string;
}
