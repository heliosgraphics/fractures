import xss from "xss"

// sanitize a given input, you're trusting the `xss` package here
export const sanitizeText = (input: string = ""): string => {
	const clean: string = xss(input)

	return clean
}

// remove markdown formatting
export const removeMarkdown = (markdownText: string): string => {
	const patternsToRemove: Array<{ pattern: RegExp; replacement: string }> = [
		// Remove Markdown image and link syntax
		{ pattern: /!\[.*?\]\(.*?\)|\[(.*?)\]\(.*?\)/g, replacement: "$1" },
		// Remove headers, bold, emphasized, strikethrough, and blockquotes
		{ pattern: /#{1,6}\s|(\*\*|__|\*|_)(.*?)\1|~~(.*?)~~|>/g, replacement: "$2$3" },
		// Remove horizontal rules and fenced code blocks
		{ pattern: /-{3,}|`{3}[\s\S]*?`{3}/g, replacement: "" },
		// Remove inline code
		{ pattern: /`{1,2}(.*?)`{1,2}/g, replacement: "$1" },
	]

	let cleanText = markdownText

	for (const { pattern, replacement } of patternsToRemove) {
		cleanText = cleanText.replace(pattern, replacement)
	}

	return cleanText
}

// add a middle ellipsis, eg.: (ellipsis, 6) gets "ell...sis"
export const middleEllipsis = (text: string = "", length: number = 64): string => {
	const diff: number = Math.floor((length - 3) / 2)
	const isValid: boolean = Boolean(!!text && typeof text === "string")
	const isTooShort: boolean = isValid && text.length > length

	if (!isValid) return ""
	if (!isTooShort) return text

	return text.substring(0, diff) + "..." + text.substring(text.length - diff, text.length)
}

// return a sanitized string
export const removeNewlines = (text?: string | null, limit?: number): string => {
	if (!text || typeof text !== "string") return ""

	const limitEnd: number = limit ?? text.length ?? 0
	const cleanString: string = text
		.replace(/(?:\r\n|\r|\n|\t)+/g, " ")
		.substring(0, limitEnd)
		.trim()

	return cleanString
}
