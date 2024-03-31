import { describe, it, expect } from "vitest"
import { compareObjects } from './objects'

describe('compareObjects', () => {
	it('should return true for identical objects', () => {
		const obj1 = { a: 1, b: 2 }
		const obj2 = { a: 1, b: 2 }
		expect(compareObjects(obj1, obj2)).toBeTruthy()
	})

	it('should return false for different objects', () => {
		const obj1 = { a: 1, b: 2 }
		const obj2 = { a: 2, b: 3 }
		expect(compareObjects(obj1, obj2)).toBeFalsy()
	})

	it('should handle null and undefined', () => {
		const obj1 = { a: 1, b: 2 }
		expect(compareObjects(obj1, null as unknown as any)).toBeFalsy()
		expect(compareObjects(null as unknown as any, obj1)).toBeFalsy()
		expect(compareObjects(undefined as unknown as any, undefined as unknown as any)).toBeTruthy()
	})

	it('should not depend on property order', () => {
		const obj1 = { a: 1, b: 2 }
		const obj2 = { b: 2, a: 1 }
		expect(compareObjects(obj1, obj2)).toBeTruthy()
	})
})
