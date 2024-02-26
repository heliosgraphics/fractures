export const getUUID = (id?: unknown): unknown => {
	if (!!id) return id

	return crypto.randomUUID()
}

export const isUUID = (uuid?: unknown): boolean => {
	const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
	const isValid = typeof uuid === "string"

	if (!isValid) return false

	return uuidRegex.test(uuid)
}
