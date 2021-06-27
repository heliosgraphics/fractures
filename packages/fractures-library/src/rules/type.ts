import type { FractureRuleType } from "../../types/css-rules";

// prettier-ignore
export const type: Array<FractureRuleType> = [
  // TODO Only these are responsive
  // .h1 {font-size: var(--font-size-h1); line-height: var(--line-height-h1); }
  // .h2 {font-size: var(--font-size-h2); line-height: var(--line-height-h2); }
  // .h3 {font-size: var(--font-size-h3); line-height: var(--line-height-h3); }
  // .h4 {font-size: var(--font-size-h4); line-height: var(--line-height-h4); }
  // .h5 {font-size: var(--font-size-h5); line-height: var(--line-height-h5); }
  // .h6 {font-size: var(--font-size-h6); line-height: var(--line-height-h6); }
  // .p {font-size: var(--font-size-p); line-height: var(--line-height-p); }
  // .small {font-size: var(--font-size-small); line-height: var(--line-height-small); }
  // .tiny {font-size: var(--font-size-tiny); line-height: var(--line-height-tiny); }

{ selector: 'sans', property: 'font-family', value: 'var(--font-family-sans)' },
{ selector: 'serif', property: 'font-family', value: 'var(--font-family-serif)' },
{ selector: 'mono', property: 'font-family', value: 'var(--font-family-mono)' },

{ selector: 'lighter', property: 'font-weight', value: 'var(--font-weight-lighter)' },
{ selector: 'light', property: 'font-weight', value: 'var(--font-weight-light)' },
{ selector: 'normal', property: 'font-weight', value: 'var(--font-weight-normal)' },
{ selector: 'bold', property: 'font-weight', value: 'var(--font-weight-bold)' },
{ selector: 'bolder', property: 'font-weight', value: 'var(--font-weight-bolder)' },

{ selector: 'italic', property: 'font-style', value: 'italic' },
{ selector: 'normal', property: 'font-style', value: 'normal' },
{ selector: 'oblique', property: 'font-style', value: 'oblique' },

{ selector: 'center', property: 'text-align', value: 'center' },
{ selector: 'justify', property: 'text-align', value: 'justify' },
{ selector: 'left', property: 'text-align', value: 'left' },
{ selector: 'right', property: 'text-align', value: 'right' },

{ selector: 'delete', property: 'text-decoration', value: 'line-through' },
{ selector: 'overline', property: 'text-decoration', value: 'overline' },
{ selector: 'underline', property: 'text-decoration', value: 'underline' },
{ selector: 'capitalize', property: 'text-transform', value: 'capitalize' },
{ selector: 'lowercase', property: 'text-transform', value: 'lowercase' },
{ selector: 'uppercase', property: 'text-transform', value: 'uppercase' },

{ selector: 'pre', property: 'white-space', value: 'pre' },
{ selector: 'pre-line', property: 'white-space', value: 'pre-line' },
{ selector: 'pre-wrap', property: 'white-space', value: 'pre-wrap' },
{ selector: 'nowrap', property: 'white-space', value: 'nowrap' },

{ selector: 'break-word', property: 'word-wrap', value: 'break-word' },
{ selector: 'unselectable', property: 'user-select', value: 'none' },

// .ellipsis {
// 	overflow: hidden;
// 	max-width: 100%;
// 	text-overflow: ellipsis;
// 	white-space: nowrap;
// }
];
