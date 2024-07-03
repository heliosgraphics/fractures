// copy the given value to the clipboard
export const copyValue = (text: string): void => {
	const input: HTMLInputElement = document.createElement("input")

	document.body.appendChild(input)
	input.value = text
	input.select()
	document.execCommand("copy", false)

	return input.remove()
}
