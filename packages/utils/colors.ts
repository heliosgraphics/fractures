type TypeRGB = [number, number, number]

export const DEFAULT_PROFILE_RGB: TypeRGB = [199, 201, 209] as const

// converts a hex value to a TypeRGB
export const hexToRgb = (hex?: string | null): TypeRGB => {
	const isValid: boolean = !!hex && typeof hex === "string"

	if (!isValid) return DEFAULT_PROFILE_RGB

	hex = hex!.replace(/^#/, "")

	const bigint = parseInt(hex, 16)
	const r: number = (bigint >> 16) & 255
	const g: number = (bigint >> 8) & 255
	const b: number = bigint & 255

	return [r, g, b]
}

// convert an rgb value to a hex string
export const rgbToHex = (r: number | string = 255, g: number | string = 255, b: number | string = 255): string => {
	const _toHex = (c: unknown): string => {
		const value: number = Number(c)
		const isInvalid: boolean = isNaN(value) || value < 0 || value > 255

		if (isInvalid) return "ff"

		const hex = value.toString(16)

		return hex.length === 1 ? `0${hex}` : hex
	}

	return `#${_toHex(r)}${_toHex(g)}${_toHex(b)}`
}
