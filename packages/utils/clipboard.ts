export const copyValue = (text: string): void => {
	const input: HTMLTextAreaElement = document.createElement("textarea")

	document.body.appendChild(input)
	input.value = text
	input.select()
	document.execCommand("copy", false)

	return input.remove()
}
