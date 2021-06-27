import type { FractureRuleType } from "../../types/css-rules";

// prettier-ignore
export const list: Array<FractureRuleType> = [
  { selector: 'list-circle > li', property: 'list-style-type', value: 'circle'  },
  { selector: 'list-decimal > li', property: 'list-style-type', value: 'decimal'  },
  { selector: 'list-decimal-leading-zero > li', property: 'list-style-type', value: 'decimal-leading-zero' },
  { selector: 'list-disc > li', property: 'list-style-type', value: 'disc' },
  { selector: 'list-greek > li', property: 'list-style-type', value: 'lower-greek' },
  { selector: 'list-lower-latin > li', property: 'list-style-type', value: 'lower-latin' },
  { selector: 'list-lower-roman > li', property: 'list-style-type', value: 'lower-roman' },
  { selector: 'list-none > li', property: 'list-style-type', value: 'none' },
  { selector: 'list-square > li', property: 'list-style-type', value: 'square' },
  { selector: 'list-upper-latin > li', property: 'list-style-type', value: 'upper-latin' },
  { selector: 'list-upper-roman > li', property: 'list-style-type', value: 'upper-roman' },
  { selector: 'list-comma > *', property: 'display', value: 'inline-block' },
  { selector: 'list-comma > *:not(:last-child):after', property: 'content', value: ", " },
];
