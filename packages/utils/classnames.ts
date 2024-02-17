export const getClasses = (...args: Array<any>): string => {
	const classNames: Set<string> = new Set()

	for (const item of args) {
		const itemType = typeof item
		const isValidString: boolean = itemType === 'string' && item.length > 0
		const isValidObject: boolean = itemType === 'object' && item !== null

		if (isValidString) {
			classNames.add(item)
		}

		if (isValidObject) {
			for (const [key, value] of Object.entries(item)) {
				if (value) classNames.add(key)
			}
		}
	}

	return [...classNames].join(' ')
}
