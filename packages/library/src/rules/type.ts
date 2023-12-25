import type { FractureRuleType } from "library/types/meta";

export const type: Array<FractureRuleType> = [
  { selector: 'h1', declarations: { fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)' }, description: 'Heading 1 font and line.' },
  { selector: 'h2', declarations: { fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }, description: 'Heading 2 font and line.' },
  { selector: 'h3', declarations: { fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)' }, description: 'Heading 3 font and line.' },
  { selector: 'h4', declarations: { fontSize: 'var(--font-size-h4)', lineHeight: 'var(--line-height-h4)' }, description: 'Heading 4 font and line.' },
  { selector: 'h5', declarations: { fontSize: 'var(--font-size-h5)', lineHeight: 'var(--line-height-h5)' }, description: 'Heading 5 font and line.' },
  { selector: 'h6', declarations: { fontSize: 'var(--font-size-h6)', lineHeight: 'var(--line-height-h6)' }, description: 'Heading 6 font and line.' },
  { selector: 'p', declarations: { fontSize: 'var(--font-size-p)', lineHeight: 'var(--line-height-p)' }, description: 'Paragraph font and line.' },
  { selector: 'small', declarations: { fontSize: 'var(--font-size-small)', lineHeight: 'var(--line-height-small)' }, description: 'Small font and line.' },
  { selector: 'tiny', declarations: { fontSize: 'var(--font-size-tiny)', lineHeight: 'var(--line-height-tiny)' }, description: 'Tiny font and line.' },

  { selector: 'sans', declarations: { fontFamily: 'var(--font-family-sans)' }, description: 'Sans font-family.' },
  { selector: 'serif', declarations: { fontFamily: 'var(--font-family-serif)' }, description: 'Serif font-family.' },
  { selector: 'mono', declarations: { fontFamily: 'var(--font-family-mono)' }, description: 'Mono font-family.' },

  { selector: 'fw-thin', declarations: { fontWeight: 'var(--font-weight-thin)' }, description: 'Thin (100) font-weight.' },
  { selector: 'fw-extra-light', declarations: { fontWeight: 'var(--font-weight-extra-light)' }, description: 'Extra light (200) font-weight.' },
  { selector: 'fw-light', declarations: { fontWeight: 'var(--font-weight-light)' }, description: 'Light (300) font-weight.' },
  { selector: 'fw-normal', declarations: { fontWeight: 'var(--font-weight-normal)' }, description: 'Normal (400) font-weight.' },
  { selector: 'fw-medium', declarations: { fontWeight: 'var(--font-weight-medium)' }, description: 'Medium (500) font-weight.' },
  { selector: 'fw-semi-bold', declarations: { fontWeight: 'var(--font-weight-semi-bold)' }, description: 'Semi bold (600) font-weight.' },
  { selector: 'fw-bold', declarations: { fontWeight: 'var(--font-weight-bold)' }, description: 'Bold (700) font-weight.' },
  { selector: 'fw-extra-bold', declarations: { fontWeight: 'var(--font-weight-extra-bold)' }, description: 'Extra bold (800) font-weight.' },
  { selector: 'fw-black', declarations: { fontWeight: 'var(--font-weight-black)' }, description: 'Black (900) font-weight.' },

  { selector: 'italic', declarations: { fontStyle: 'italic' }, description: 'Italic font-style.' },
  { selector: 'normal', declarations: { fontStyle: 'normal' }, description: 'Normal font-style.' },
  { selector: 'oblique', declarations: { fontStyle: 'oblique' }, description: 'Oblique font-style.' },

  { selector: 'center', declarations: { textAlign: 'center' }, description: 'Center text-align.' },
  { selector: 'justify', declarations: { textAlign: 'justify' }, description: 'Justify text-align.' },
  { selector: 'left', declarations: { textAlign: 'left' }, description: 'Left text-align.' },
  { selector: 'right', declarations: { textAlign: 'right' }, description: 'Right text-align.' },

  { selector: 'delete', declarations: { textDecorationLine: 'line-through' }, description: 'Line-through text.' },
  { selector: 'overline', declarations: { textDecorationLine: 'overline' }, description: 'Overline text.' },
  { selector: 'underline', declarations: { textDecorationLine: 'underline' }, description: 'Underline text.' },
  { selector: 'capitalize', declarations: { textTransform: 'capitalize' }, description: 'Capitalize text.' },
  { selector: 'lowercase', declarations: { textTransform: 'lowercase' }, description: 'Lowercase text.' },
  { selector: 'uppercase', declarations: { textTransform: 'uppercase' }, description: 'Uppercase text.' },

  { selector: 'pre', declarations: { whiteSpace: 'pre' }, description: 'Pre white-space.' },
  { selector: 'pre-line', declarations: { whiteSpace: 'pre-line' }, description: 'Pre-line white-space' },
  { selector: 'pre-wrap', declarations: { whiteSpace: 'pre-wrap' }, description: 'Pre-wrap white-space' },
  { selector: 'nowrap', declarations: { whiteSpace: 'nowrap' }, description: 'Nowrap white-space' },

  { selector: 'break-word', declarations: { wordWrap: 'break-word' }, description: 'Break-word word-wrap.' },
  { selector: 'unselectable', declarations: { userSelect: 'none' }, description: 'User-select is none.' },

  {
    selector: 'ellipsis', declarations: {
      overflow: 'hidden',
      maxWidth: '100%',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    description: 'Everything needed for ellipsis text-overflow.'
  },
];





