// gets a valid slug from the given string.
export const getSlug = (text?: string): string => {
	const isValid: boolean = Boolean(text && typeof text == "string")

	if (!isValid) return ""

	return (
		text!
			// normalize characters to their base characters and diacritics
			.normalize("NFD")
			// remove diacritic marks
			.replace(/[\u0300-\u036f]/g, "")
			// remove leading and trailing whitespace
			.trim()
			// convert to lowercase
			.toLowerCase()
			// remove invalid characters
			.replace(/[^a-z0-9 -]/g, "")
			// replace spaces with hyphens
			.replace(/\s+/g, "-")
			// replace multiple hyphens with a single hyphen
			.replace(/-+/g, "-")
	)
}
