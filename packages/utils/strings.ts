import xss from "xss"

// sanitizes a given input, you're trusting the `xss` package here
export const sanitizeText = (input: string = ""): string => {
	const clean: string = xss(input)

	return clean
}

// removes markdown formatting
export const removeMarkdown = (markdownText: string): string => {
	const patternsToRemove: Array<{ pattern: RegExp; replacement: string }> = [
		// ![alt text](url)
		{ pattern: /!\[.*?\]\(.*?\)/g, replacement: "" },
		// [text](url)
		{ pattern: /\[(.*?)\]\(.*?\)/g, replacement: "$1" },
		// #, ##, etc.
		{ pattern: /#{1,6}\s/g, replacement: "" },
		// **bold**
		{ pattern: /\*\*(.*?)\*\*/g, replacement: "$1" },
		// __bold__
		{ pattern: /__(.*?)__/g, replacement: "$1" },
		// *emphasized*
		{ pattern: /\*(.*?)\*/g, replacement: "$1" },
		// _emphasized_
		{ pattern: /_(.*?)_/g, replacement: "$1" },
		// ~~strikethrough~~
		{ pattern: /~~(.*?)~~/g, replacement: "$1" },
		// >
		{ pattern: />/g, replacement: "" },
		// ---
		{ pattern: /-{3,}/g, replacement: "" },
		// ```
		{ pattern: /`{3}.*?`{3}/gs, replacement: "" },
		// `code`
		{ pattern: /`{1,2}(.*?)`{1,2}/g, replacement: "$1" },
	]

	let cleanText = markdownText

	for (const { pattern, replacement } of patternsToRemove) {
		cleanText = cleanText.replace(pattern, replacement)
	}

	return cleanText
}

// adds a middle ellipsis, eg.: (ellipsis, 6) gets "ell...sis"
export const middleEllipsis = (text: string = "", length: number = 64): string => {
	const diff: number = Math.floor((length - 3) / 2)
	const isValid: boolean = Boolean(!!text && typeof text === "string")
	const isTooShort: boolean = isValid && text.length > length

	if (!isValid) return ""
	if (!isTooShort) return text

	return text.substring(0, diff) + "..." + text.substring(text.length - diff, text.length)
}

// returns a sanitized string
export const removeNewlines = (text?: string | null, limit?: number): string => {
	if (!text || typeof text !== "string") return ""

	const limitEnd: number = limit ?? text.length ?? 0
	const cleanString: string = text
		.replace(/(?:\r\n|\r|\n|\t)+/g, " ")
		.substring(0, limitEnd)
		.trim()

	return cleanString
}
