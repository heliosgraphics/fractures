import type { FractureRuleType } from "../../types/css-rules";

// prettier-ignore
export const flex: Array<FractureRuleType> = [
  { selector: 'flex-wrap', property: 'flex-wrap', value: 'wrap' },
  { selector: 'flex-column', property: 'flex-direction', value: 'column', hasBreakpoints: true },
  { selector: 'space-around', property: 'justify-content', value: 'space-around' },
  { selector: 'space-between', property: 'justify-content', value: 'space-between' },
  { selector: 'space-evenly', property: 'justify-content', value: 'space-evenly' },

  // .flex-center { align-items: center; justify-content: center; },
  { selector: 'flex-y-center', property: 'align-items', value: 'center' },
  { selector: 'flex-x-center', property: 'justify-content', value: 'center' },
  { selector: 'flex-left', property: 'justify-content', value: 'flex-start' },
  { selector: 'flex-right', property: 'justify-content', value: 'flex-end' },
  { selector: 'flex-baseline', property: 'align-items', value: 'baseline' },
  { selector: 'flex-top', property: 'align-items', value: 'flex-start' },
  { selector: 'flex-bottom', property: 'align-items', value: 'flex-end' },

  // .self-center { align-self: center; justify-self: center; },
  { selector: 'self-x-center', property: 'justify-self', value: 'center' },
  { selector: 'self-y-center', property: 'align-self', value: 'center' },
  { selector: 'self-left', property: 'justify-self', value: 'flex-start' },
  { selector: 'self-right', property: 'justify-self', value: 'flex-end' },
  { selector: 'self-baseline', property: 'justify-self', value: 'baseline' },
  { selector: 'self-top', property: 'align-self', value: 'flex-start' },
  { selector: 'self-bottom', property: 'align-self', value: 'flex-end' },

  { selector: 'flex-gap-px:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-px)', hasBreakpoints: true },
  { selector: 'flex-gap-1:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-1)', hasBreakpoints: true },
  { selector: 'flex-gap-2:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-2)', hasBreakpoints: true },
  { selector: 'flex-gap-3:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-3)', hasBreakpoints: true },
  { selector: 'flex-gap-4:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-4)', hasBreakpoints: true },
  { selector: 'flex-gap-5:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-5)', hasBreakpoints: true },
  { selector: 'flex-gap-6:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-6)', hasBreakpoints: true },
  { selector: 'flex-gap-7:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-7)', hasBreakpoints: true },
  { selector: 'flex-gap-8:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-8)', hasBreakpoints: true },
  { selector: 'flex-gap-9:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-9)', hasBreakpoints: true },
  { selector: 'flex-gap-10:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-10)', hasBreakpoints: true },
  { selector: 'flex-gap-11:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-11)', hasBreakpoints: true },
  { selector: 'flex-gap-12:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-12)', hasBreakpoints: true },
  { selector: 'flex-gap-13:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-13)', hasBreakpoints: true },
  { selector: 'flex-gap-14:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-14)', hasBreakpoints: true },
  { selector: 'flex-gap-15:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-15)', hasBreakpoints: true },
  { selector: 'flex-gap-16:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-16)', hasBreakpoints: true },
  { selector: 'flex-gap-24:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-24)', hasBreakpoints: true },
  { selector: 'flex-gap-32:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-32)', hasBreakpoints: true },
  { selector: 'flex-gap-40:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-40)', hasBreakpoints: true },
  { selector: 'flex-gap-48:not(.flex-column) > *:not(:last-child)', property: 'margin-right', value: 'var(--box-48)', hasBreakpoints: true },

  { selector: 'flex-column.flex-gap-px > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-px)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-1 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-1)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-2 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-2)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-3 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-3)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-4 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-4)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-5 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-5)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-6 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-6)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-7 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-7)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-8 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-8)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-9 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-9)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-10 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-10)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-11 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-11)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-12 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-12)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-13 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-13)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-14 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-14)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-15 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-15)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-16 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-16)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-24 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-24)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-32 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-32)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-40 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-40)', hasBreakpoints: true },
  { selector: 'flex-column.flex-gap-48 > *:not(:last-child)', property: 'margin-bottom', value: 'var(--box-48)', hasBreakpoints: true },

  // .grow-1,
  // .grow-2,
  // .grow-3,
  // .grow-4,
  // .grow-5,
  // .grow-6,
  // .grow-7,
  // .grow-8,
  // .grow-9,
  // .grow-10,
  // .grow-11,
  // .grow-12 { flex-basis: 0; }

  // .grow-1 { flex-grow: 1; }
  // .grow-2 { flex-grow: 2; }
  // .grow-3 { flex-grow: 3; }
  // .grow-4 { flex-grow: 4; }
  // .grow-5 { flex-grow: 5; }
  // .grow-6 { flex-grow: 6; }
  // .grow-7 { flex-grow: 7; }
  // .grow-8 { flex-grow: 8; }
  // .grow-9 { flex-grow: 9; }
  // .grow-10 { flex-grow: 10; }
  // .grow-11 { flex-grow: 11; }
  // .grow-12 { flex-grow: 12; }
];
