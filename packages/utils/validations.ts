// validates a URL
export const validateUrl = (text?: string | null): boolean => {
	let url: URL

	try {
		url = new URL(text as string)
	} catch (_) {
		return false
	}

	// "http" is unsafe
	const isValid: boolean = Boolean(url.protocol === "https:")

	return isValid
}

// validates an email
export const validateEmail = (email: string = ""): boolean => {
	const re: RegExp = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	return re.test(email)
}
