export const deepEqual = (a: unknown, b: unknown, seen = new WeakMap()): boolean => {
	if (a === b) return true
	if (a == null || b == null) return false
	if (typeof a !== "object" || typeof b !== "object") return false

	if (seen.has(a as object)) return seen.get(a as object) === b

	seen.set(a as object, b)

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false

		return a.every((item, index) => deepEqual(item, b[index], seen))
	}

	if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()

	if (a instanceof Set && b instanceof Set) {
		if (a.size !== b.size) return false

		return areSetsEqual(a, b, true)
	}

	if (a instanceof Map && b instanceof Map) {
		if (a.size !== b.size) return false
		for (const [key, value] of a.entries()) {
			if (!b.has(key) || !deepEqual(value, b.get(key), seen)) {
				return false
			}
		}

		return true
	}

	const keysA = Object.keys(a as object)
	const keysB = Object.keys(b as object)

	if (keysA.length !== keysB.length) return false

	return keysA.every(
		(key) => Object.prototype.hasOwnProperty.call(b, key) && deepEqual((a as any)[key], (b as any)[key], seen),
	)
}

export const areSetsEqual = <T>(setA: Set<T>, setB: Set<T>, deep = false): boolean => {
	if (setA.size !== setB.size) {
		return false
	}

	if (!deep) {
		for (const elem of setA) {
			if (!setB.has(elem)) {
				return false
			}
		}
		return true
	}

	const arrayA = Array.from(setA)
	const arrayB = Array.from(setB)

	const usedIndices = new Set<number>()

	for (const elemA of arrayA) {
		let found = false
		for (let i = 0; i < arrayB.length; i++) {
			if (usedIndices.has(i)) continue

			if (deepEqual(elemA, arrayB[i])) {
				usedIndices.add(i)
				found = true
				break
			}
		}
		if (!found) return false
	}

	return true
}
