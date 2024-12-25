import { deepEqual, areSetsEqual } from "./equals"
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"

describe("deepEqual", () => {
	it("primitives", () => {
		expect(deepEqual(1, 1)).toBe(true)
		expect(deepEqual("hello", "hello")).toBe(true)
		expect(deepEqual(true, true)).toBe(true)
		expect(deepEqual(null, null)).toBe(true)
		expect(deepEqual(undefined, undefined)).toBe(true)
		expect(deepEqual(1, 2)).toBe(false)
		expect(deepEqual("hello", "world")).toBe(false)
		expect(deepEqual(true, false)).toBe(false)
		expect(deepEqual(null, undefined)).toBe(false)
	})

	it("arrays", () => {
		expect(deepEqual([], [])).toBe(true)
		expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true)
		expect(deepEqual([1, [2, 3]], [1, [2, 3]])).toBe(true)
		expect(deepEqual([1, 2], [1, 2, 3])).toBe(false)
		expect(deepEqual([1, 2, 3], [1, 3, 2])).toBe(false)
	})

	it("objects", () => {
		expect(deepEqual({}, {})).toBe(true)
		expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
		expect(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true)
		expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
		expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
		expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false)
	})

	it("dates", () => {
		const date1 = new Date("2024-01-01")
		const date2 = new Date("2024-01-01")
		const date3 = new Date("2024-01-02")

		expect(deepEqual(date1, date2)).toBe(true)
		expect(deepEqual(date1, date3)).toBe(false)
	})

	it("sets", () => {
		const set1 = new Set([1, 2, 3])
		const set2 = new Set([1, 2, 3])
		const set3 = new Set([1, 2, 4])

		expect(deepEqual(set1, set2)).toBe(true)
		expect(deepEqual(set1, set3)).toBe(false)
	})

	it("maps", () => {
		const map1 = new Map([
			["a", 1],
			["b", 2],
		])
		const map2 = new Map([
			["a", 1],
			["b", 2],
		])
		const map3 = new Map([
			["a", 1],
			["b", 3],
		])

		expect(deepEqual(map1, map2)).toBe(true)
		expect(deepEqual(map1, map3)).toBe(false)
	})

	it("circular references", () => {
		const obj1: any = { a: 1 }
		const obj2: any = { a: 1 }
		obj1.self = obj1
		obj2.self = obj2

		expect(deepEqual(obj1, obj2)).toBe(true)
	})
})

describe("areSetsEqual", () => {
	it("simple sets without deep comparison", () => {
		const set1 = new Set([1, 2, 3])
		const set2 = new Set([1, 2, 3])
		const set3 = new Set([1, 2, 4])

		expect(areSetsEqual(set1, set2)).toBe(true)
		expect(areSetsEqual(set1, set3)).toBe(false)
	})

	it("sets with objects using deep comparison", () => {
		const set1 = new Set([{ a: 1 }, { b: 2 }])
		const set2 = new Set([{ a: 1 }, { b: 2 }])
		const set3 = new Set([{ a: 1 }, { b: 3 }])

		expect(areSetsEqual(set1, set2, true)).toBe(true)
		expect(areSetsEqual(set1, set3, true)).toBe(false)
	})

	it("sets with different sizes", () => {
		const set1 = new Set([1, 2, 3])
		const set2 = new Set([1, 2])

		expect(areSetsEqual(set1, set2)).toBe(false)
		expect(areSetsEqual(set1, set2, true)).toBe(false)
	})

	it("sets with nested structures", () => {
		const set1 = new Set([{ a: { b: 2 } }, [1, 2, 3]])
		const set2 = new Set([{ a: { b: 2 } }, [1, 2, 3]])
		const set3 = new Set([{ a: { b: 3 } }, [1, 2, 3]])

		expect(areSetsEqual(set1, set2, true)).toBe(true)
		expect(areSetsEqual(set1, set3, true)).toBe(false)
	})

	it("empty sets", () => {
		const set1 = new Set()
		const set2 = new Set()

		expect(areSetsEqual(set1, set2)).toBe(true)
		expect(areSetsEqual(set1, set2, true)).toBe(true)
	})
})
