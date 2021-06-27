import type { FractureRuleType } from "../../types/css-rules";

// prettier-ignore
export const type: Array<FractureRuleType> = [
{ selector: '.h1', declarations: {fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)'}, hasBreakpoints: true },
{ selector: '.h2', declarations: {fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)'}, hasBreakpoints: true },
{ selector: '.h3', declarations: {fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)'}, hasBreakpoints: true },
{ selector: '.h4', declarations: {fontSize: 'var(--font-size-h4)', lineHeight: 'var(--line-height-h4)'}, hasBreakpoints: true },
{ selector: '.h5', declarations: {fontSize: 'var(--font-size-h5)', lineHeight: 'var(--line-height-h5)'}, hasBreakpoints: true },
{ selector: '.h6', declarations: {fontSize: 'var(--font-size-h6)', lineHeight: 'var(--line-height-h6)'}, hasBreakpoints: true },
{ selector: '.p', declarations: {fontSize: 'var(--font-size-p)', lineHeight: 'var(--line-height-p)'}, hasBreakpoints: true },
{ selector: '.small', declarations: {fontSize: 'var(--font-size-small)', lineHeight: 'var(--line-height-small)'}, hasBreakpoints: true },
{ selector: '.tiny', declarations: {fontSize: 'var(--font-size-tiny)', lineHeight: 'var(--line-height-tiny)'}, hasBreakpoints: true },

{ selector: '.sans', declarations: {fontFamily: 'var(--font-family-sans)'} },
{ selector: '.serif', declarations: {fontFamily: 'var(--font-family-serif)'} },
{ selector: '.mono', declarations: {fontFamily: 'var(--font-family-mono)'} },

{ selector: '.lighter', declarations: {fontWeight: 'var(--font-weight-lighter)' as any} },
{ selector: '.light', declarations: {fontWeight: 'var(--font-weight-light)' as any} },
{ selector: '.normal', declarations: {fontWeight: 'var(--font-weight-normal)' as any} },
{ selector: '.bold', declarations: {fontWeight: 'var(--font-weight-bold)' as any} },
{ selector: '.bolder', declarations: {fontWeight: 'var(--font-weight-bolder)' as any} },

{ selector: '.italic', declarations: {fontStyle: 'italic'} },
{ selector: '.normal', declarations: {fontStyle: 'normal'} },
{ selector: '.oblique', declarations: {fontStyle: 'oblique'} },

{ selector: '.center', declarations: {textAlign: 'center'} },
{ selector: '.justify', declarations: {textAlign: 'justify'} },
{ selector: '.left', declarations: {textAlign: 'left'} },
{ selector: '.right', declarations: {textAlign: 'right'} },

{ selector: '.delete', declarations: {textDecoration: 'line-through'} },
{ selector: '.overline', declarations: {textDecoration: 'overline'} },
{ selector: '.underline', declarations: {textDecoration: 'underline'} },
{ selector: '.capitalize', declarations: {textTransform: 'capitalize'} },
{ selector: '.lowercase', declarations: {textTransform: 'lowercase'} },
{ selector: '.uppercase', declarations: {textTransform: 'uppercase'} },

{ selector: '.pre', declarations: {whiteSpace: 'pre'} },
{ selector: '.pre-line', declarations: {whiteSpace: 'pre-line'} },
{ selector: '.pre-wrap', declarations: {whiteSpace: 'pre-wrap'} },
{ selector: '.nowrap', declarations: {whiteSpace: 'nowrap'} },

{ selector: '.break-word', declarations: {wordWrap: 'break-word'} },
{ selector: '.unselectable', declarations: {userSelect: 'none'} },

{ selector: '.ellipsis', declarations: {
  overflow: 'hidden',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
} },
];
