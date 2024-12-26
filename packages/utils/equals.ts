type Primitive = string | number | boolean | null | undefined | bigint | symbol
type Comparable = Primitive | object | Array<unknown> | Set<unknown> | Map<unknown, unknown>

export const areDatesEqual = (a: Date, b: Date): boolean => a.getTime() === b.getTime()
export const areRegExpsEqual = (a: RegExp, b: RegExp): boolean => a.toString() === b.toString()
export const areErrorsEqual = (a: Error, b: Error): boolean =>
	a.message === b.message && a.name === b.name && a.stack === b.stack
export const areBuffersEqual = (a: Buffer, b: Buffer): boolean => a.length === b.length && Buffer.compare(a, b) === 0

export const areMapsEqual = <K, V extends Comparable>(
	mapA: Map<K, V>,
	mapB: Map<K, V>,
	seen = new WeakMap<object, object>(),
): boolean => {
	if (mapA.size !== mapB.size) return false
	if (mapA === mapB) return true

	const entriesA = Array.from(mapA.entries())
	const entriesB = new Map(mapB)

	return entriesA.every(([key, value]) => entriesB.has(key) && isEqual(value, entriesB.get(key), seen))
}

export const areSetsEqual = <T>(setA: Set<T>, setB: Set<T>): boolean => {
	if (setA.size !== setB.size) return false
	if (setA === setB) return true

	const arrA = Array.from(setA)
	const arrB = Array.from(setB)
	const matched = new Array(arrB.length).fill(false)

	for (let i = 0; i < arrA.length; i++) {
		let foundMatch = false

		for (let j = 0; j < arrB.length; j++) {
			if (!matched[j] && isEqual((arrA as any)[i], arrB[j])) {
				matched[j] = true
				foundMatch = true
				break
			}
		}

		if (!foundMatch) return false
	}

	return true
}

export const isEqual = <T extends Comparable>(a: T, b: T, seen = new WeakMap<object, object>()): boolean => {
	if (Object.is(a, b)) return true

	const typeA = typeof a
	const typeB = typeof b

	if (typeA !== typeB) return false
	if (typeA !== "object") return false
	if (a === null || b === null) return a === b

	const seenA = seen.get(a as object)
	if (seenA) return seenA === b

	seen.set(a as object, b as any)

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false

		if (a.length < 20) {
			return a.every((item, index) => isEqual(item, b[index], seen))
		}

		for (let i = 0; i < a.length; i++) {
			if (!isEqual(a[i], b[i], seen)) return false
		}

		return true
	}

	if (a instanceof Date && b instanceof Date) return areDatesEqual(a, b)
	if (a instanceof RegExp && b instanceof RegExp) return areRegExpsEqual(a, b)
	if (a instanceof Error && b instanceof Error) return areErrorsEqual(a, b)
	if (Buffer.isBuffer(a) && Buffer.isBuffer(b)) return areBuffersEqual(a, b)
	if (a instanceof Set && b instanceof Set) return areSetsEqual(a, b)
	if (a instanceof Map && b instanceof Map) return areMapsEqual(a, b, seen)

	const keysA = [...Object.keys(a as object), ...Object.getOwnPropertySymbols(a as object)]
	const keysB = [...Object.keys(b as object), ...Object.getOwnPropertySymbols(b as object)]

	if (keysA.length !== keysB.length) return false

	return keysA.every(
		(key) => Object.prototype.hasOwnProperty.call(b, key) && isEqual((a as any)[key], (b as any)[key], seen),
	)
}
