import type { FractureRuleType } from "../types/meta"

export const TYPE: Array<FractureRuleType> = [
	{
		selector: "h0",
		declarations: {
			fontSize: "var(--font-size-h0)",
			lineHeight: "var(--line-height-h0)",
		},
	},
	{
		selector: "h1",
		declarations: {
			fontSize: "var(--font-size-h1)",
			lineHeight: "var(--line-height-h1)",
		},
	},
	{
		selector: "h2",
		declarations: {
			fontSize: "var(--font-size-h2)",
			lineHeight: "var(--line-height-h2)",
		},
	},
	{
		selector: "h3",
		declarations: {
			fontSize: "var(--font-size-h3)",
			lineHeight: "var(--line-height-h3)",
		},
	},
	{
		selector: "h4",
		declarations: {
			fontSize: "var(--font-size-h4)",
			lineHeight: "var(--line-height-h4)",
		},
	},
	{
		selector: "h5",
		declarations: {
			fontSize: "var(--font-size-h5)",
			lineHeight: "var(--line-height-h5)",
		},
	},
	{
		selector: "h6",
		declarations: {
			fontSize: "var(--font-size-h6)",
			lineHeight: "var(--line-height-h6)",
		},
	},
	{
		selector: "p",
		declarations: {
			fontSize: "var(--font-size-p)",
			lineHeight: "var(--line-height-p)",
		},
	},
	{
		selector: "small",
		declarations: {
			fontSize: "var(--font-size-small)",
			lineHeight: "var(--line-height-small)",
		},
	},
	{
		selector: "tiny",
		declarations: {
			fontSize: "var(--font-size-tiny)",
			lineHeight: "var(--line-height-tiny)",
		},
	},

	{
		selector: "sans",
		declarations: { fontFamily: "var(--font-family-sans)" },
	},
	{
		selector: "serif",
		declarations: { fontFamily: "var(--font-family-serif)" },
	},
	{
		selector: "mono",
		declarations: { fontFamily: "var(--font-family-mono)" },
	},

	{
		selector: "fw-thin",
		declarations: { fontWeight: "var(--font-weight-thin)" },
	},
	{
		selector: "fw-extra-light",
		declarations: { fontWeight: "var(--font-weight-extra-light)" },
	},
	{
		selector: "fw-light",
		declarations: { fontWeight: "var(--font-weight-light)" },
	},
	{
		selector: "fw-normal",
		declarations: { fontWeight: "var(--font-weight-normal)" },
	},
	{
		selector: "fw-medium",
		declarations: { fontWeight: "var(--font-weight-medium)" },
	},
	{
		selector: "fw-semi-bold",
		declarations: { fontWeight: "var(--font-weight-semi-bold)" },
	},
	{
		selector: "fw-bold",
		declarations: { fontWeight: "var(--font-weight-bold)" },
	},
	{
		selector: "fw-extra-bold",
		declarations: { fontWeight: "var(--font-weight-extra-bold)" },
	},
	{
		selector: "fw-black",
		declarations: { fontWeight: "var(--font-weight-black)" },
	},

	{
		selector: "italic",
		declarations: { fontStyle: "italic" },
	},
	{
		selector: "normal",
		declarations: { fontStyle: "normal" },
	},
	{
		selector: "oblique",
		declarations: { fontStyle: "oblique" },
	},

	{
		selector: "center",
		declarations: { textAlign: "center" },
	},
	{
		selector: "justify",
		declarations: { textAlign: "justify" },
	},
	{
		selector: "left",
		declarations: { textAlign: "left" },
	},
	{
		selector: "right",
		declarations: { textAlign: "right" },
	},

	{
		selector: "delete",
		declarations: { textDecorationLine: "line-through" },
	},
	{
		selector: "overline",
		declarations: { textDecorationLine: "overline" },
	},
	{
		selector: "underline",
		declarations: { textDecorationLine: "underline" },
	},
	{
		selector: "capitalize",
		declarations: { textTransform: "capitalize" },
	},
	{
		selector: "lowercase",
		declarations: { textTransform: "lowercase" },
	},
	{
		selector: "uppercase",
		declarations: { textTransform: "uppercase" },
	},

	{
		selector: "pre",
		declarations: { whiteSpace: "pre" },
	},
	{
		selector: "pre-line",
		declarations: { whiteSpace: "pre-line" },
	},
	{
		selector: "pre-wrap",
		declarations: { whiteSpace: "pre-wrap" },
	},
	{
		selector: "nowrap",
		declarations: { whiteSpace: "nowrap" },
	},

	{
		selector: "break-word",
		declarations: { wordWrap: "break-word" },
	},
	{
		selector: "non-selectable",
		declarations: { userSelect: "none" },
	},

	{
		selector: "ellipsis",
		declarations: {
			overflow: "hidden",
			maxWidth: "100%",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
		},
	},
] as const
