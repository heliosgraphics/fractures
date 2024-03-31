const _orderObjectProperties = (obj: unknown): unknown | object => {
	if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return obj

	return Object.keys(obj).sort().reduce((acc, key) => {
		acc[key] = _orderObjectProperties(obj[key])

		return acc
	}, {})
}

export const compareObjects = (first: unknown, second: unknown): boolean => {
	if (!first || !second) return first === second

	const orderedFirst = _orderObjectProperties(first)
	const orderedSecond = _orderObjectProperties(second)

	return JSON.stringify(orderedFirst) === JSON.stringify(orderedSecond)
}
