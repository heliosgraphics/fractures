import type { FractureRuleType } from "../types/meta";

export const list: Array<FractureRuleType> = [
  { selector: 'list-circle > li', declarations: { listStyleType: 'circle' }, selectorNice: 'list-circle' },
  { selector: 'list-decimal > li', declarations: { listStyleType: 'decimal' }, selectorNice: 'list-decimal' },
  { selector: 'list-decimal-leading-zero > li', declarations: { listStyleType: 'decimal-leading-zero' }, selectorNice: 'list-decimal-leading-zero' },
  { selector: 'list-disc > li', declarations: { listStyleType: 'disc' }, selectorNice: 'list-disc' },
  { selector: 'list-greek > li', declarations: { listStyleType: 'lower-greek' }, selectorNice: 'list-greek' },
  { selector: 'list-lower-latin > li', declarations: { listStyleType: 'lower-latin' }, selectorNice: 'list-lower-latin' },
  { selector: 'list-lower-roman > li', declarations: { listStyleType: 'lower-roman' }, selectorNice: 'list-lower-roman' },
  { selector: 'list-none > li', declarations: { listStyleType: 'none' }, selectorNice: 'list-none' },
  { selector: 'list-square > li', declarations: { listStyleType: 'square' }, selectorNice: 'list-square' },
  { selector: 'list-upper-latin > li', declarations: { listStyleType: 'upper-latin' }, selectorNice: 'list-upper-latin' },
  { selector: 'list-upper-roman > li', declarations: { listStyleType: 'upper-roman' }, selectorNice: 'list-upper-roman' },
  { selector: 'list-comma > *', declarations: { display: 'inline-block' }, selectorNice: 'list-comma' },
  { selector: 'list-comma > *:not(:last-child):after', declarations: { content: "', '" }, isHidden: true },
];
