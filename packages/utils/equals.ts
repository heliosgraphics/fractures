type FracturesPrimitive = string | number | boolean | null | undefined | bigint | symbol
type FracturesComparable = FracturesPrimitive | object | Array<unknown> | Set<unknown> | Map<unknown, unknown>

export const _getMapsEqual = <K, V>(
	mapA: Map<K, V>,
	mapB: Map<K, V>,
	seen = new WeakMap<object, object>(),
): boolean => {
	if (mapA.size !== mapB.size) return false
	if (mapA === mapB) return true

	const entriesA = Array.from(mapA.entries())
	const entriesB = new Map(mapB)

	return entriesA.every(
		([key, value]) =>
			entriesB.has(key) && _getEqual(value as FracturesComparable, entriesB.get(key) as FracturesComparable, seen),
	)
}

export const getDatesEqual = (a: Date, b: Date): boolean => a.getTime() === b.getTime()
export const getRegExpsEqual = (a: RegExp, b: RegExp): boolean => a.toString() === b.toString()
export const getErrorsEqual = (a: Error, b: Error): boolean =>
	a.message === b.message && a.name === b.name && a.stack === b.stack
export const getBuffersEqual = (a: Buffer, b: Buffer): boolean => a.length === b.length && Buffer.compare(a, b) === 0

export const getSetsEqual = <T>(setA: Set<T>, setB: Set<T>): boolean => {
	if (setA.size !== setB.size) return false
	if (setA === setB) return true
	if (setA.size === 0) return true

	const arrA = Array.from(setA)
	const arrB = Array.from(setB)
	const matched = new Array(arrB.length).fill(false)

	for (let i = 0; i < arrA.length; i++) {
		let foundMatch = false

		for (let j = 0; j < arrB.length; j++) {
			if (!matched[j] && getEqual((arrA as any)[i], arrB[j])) {
				matched[j] = true
				foundMatch = true
				break
			}
		}

		if (!foundMatch) return false
	}

	return true
}

export const _getEqual = <T extends FracturesComparable>(a: T, b: T, seen = new WeakMap<object, object>()): boolean => {
	if (a === b) return true
	if (a === null || b === null) return a === b

	if (typeof a !== "object" && typeof b !== "object") {
		return a === b
	}

	if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) {
		return false
	}

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false

		return a.every((val, idx) => _getEqual(val, b[idx], seen))
	}

	if (Object.is(a, b)) return true

	const typeA = typeof a
	const typeB = typeof b

	if (typeA !== typeB) return false
	if (typeA !== "object") return false

	const seenA = seen.get(a as object)
	if (seenA) return seenA === b

	seen.set(a as object, b as any)

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false

		for (let i = 0; i < a.length; i++) {
			if (!_getEqual(a[i], b[i], seen)) return false
		}
		return true
	}

	if (a instanceof Map && b instanceof Map) return _getMapsEqual(a, b, seen)
	if (a instanceof Set && b instanceof Set) return getSetsEqual(a, b)
	if (a instanceof Date && b instanceof Date) return getDatesEqual(a, b)
	if (a instanceof Error && b instanceof Error) return getErrorsEqual(a, b)
	if (a instanceof RegExp && b instanceof RegExp) return getRegExpsEqual(a, b)
	if (Buffer.isBuffer(a) && Buffer.isBuffer(b)) return getBuffersEqual(a, b)

	const keysA = [...Object.keys(a as object), ...Object.getOwnPropertySymbols(a as object)]
	const keysB = [...Object.keys(b as object), ...Object.getOwnPropertySymbols(b as object)]

	if (keysA.length !== keysB.length) return false

	return keysA.every(
		(key) => Object.prototype.hasOwnProperty.call(b, key) && _getEqual((a as any)[key], (b as any)[key], seen),
	)
}

export const getEqual = <T extends FracturesComparable>(a: T, b: T): boolean => {
	return _getEqual(a, b)
}

export const getMapsEqual = <T extends FracturesComparable>(a: T, b: T): boolean => {
	return _getMapsEqual(a as Map<unknown, unknown>, b as Map<unknown, unknown>)
}
