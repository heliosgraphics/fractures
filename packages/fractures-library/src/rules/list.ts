import type { FractureRuleType } from "../../types/css-rules";

// prettier-ignore
export const list: Array<FractureRuleType> = [
  { selector: '.list-circle > li', declarations: {listStyleType: 'circle'} },
  { selector: '.list-decimal > li', declarations: {listStyleType: 'decimal'} },
  { selector: '.list-decimal-leading-zero > li', declarations: {listStyleType: 'decimal-leading-zero'} },
  { selector: '.list-disc > li', declarations: {listStyleType: 'disc'} },
  { selector: '.list-greek > li', declarations: {listStyleType: 'lower-greek'} },
  { selector: '.list-lower-latin > li', declarations: {listStyleType: 'lower-latin'} },
  { selector: '.list-lower-roman > li', declarations: {listStyleType: 'lower-roman'} },
  { selector: '.list-none > li', declarations: {listStyleType: 'none'} },
  { selector: '.list-square > li', declarations: {listStyleType: 'square'} },
  { selector: '.list-upper-latin > li', declarations: {listStyleType: 'upper-latin'} },
  { selector: '.list-upper-roman > li', declarations: {listStyleType: 'upper-roman'} },
  { selector: '.list-comma > *', declarations: {display: 'inline-block'} },
  { selector: '.list-comma > *:not(:last-child):after', declarations: {content: "', '"} },
];
