import { isEqual, areSetsEqual } from "./equals"
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"

describe("isEqual", () => {
	it("primitives", () => {
		expect(isEqual(1, 1)).toBe(true)
		expect(isEqual("hello", "hello")).toBe(true)
		expect(isEqual(" ", " ")).toBe(true)
		expect(isEqual("❤️", "❤️")).toBe(true)
		expect(isEqual(true, true)).toBe(true)
		expect(isEqual(null, null)).toBe(true)
		expect(isEqual(undefined, undefined)).toBe(true)
		expect(isEqual(1, 2)).toBe(false)
		expect(isEqual("hello", "world")).toBe(false)
		expect(isEqual(true, false)).toBe(false)
		expect(isEqual(null, undefined)).toBe(false)
	})

	it("arrays", () => {
		expect(isEqual([], [])).toBe(true)
		expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
		expect(isEqual([1, [2, 3]], [1, [2, 3]])).toBe(true)
		expect(isEqual([1, 2], [1, 2, 3])).toBe(false)
		expect(isEqual([1, 2, 3], [1, 3, 2])).toBe(false)
	})

	it("objects", () => {
		expect(isEqual({}, {})).toBe(true)
		expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
		expect(isEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true)
		expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
		expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
		expect(isEqual({ a: 1 }, { a: 2 })).toBe(false)
	})

	it("dates", () => {
		const date1 = new Date("2024-01-01")
		const date2 = new Date("2024-01-01")
		const date3 = new Date("2024-01-02")

		expect(isEqual(date1, date2)).toBe(true)
		expect(isEqual(date1, date3)).toBe(false)
	})

	it("sets", () => {
		const set1 = new Set(["hello", 2, 3])
		const set2 = new Set(["hello", 2, 3])
		const set3 = new Set(["hello", 2, "3"])

		expect(isEqual(set1, set2)).toBe(true)
		expect(isEqual(set1, set3)).toBe(false)
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

		expect(isEqual(map1, map2)).toBe(true)
		expect(isEqual(map1, map3)).toBe(false)
	})

	it("circular references", () => {
		const obj1: any = { a: 1 }
		const obj2: any = { a: 1 }

		obj1.self = obj1
		obj2.self = obj2

		expect(isEqual(obj1, obj2)).toBe(true)
	})

	it("symbols are unique", () => {
		const symbol1 = Symbol("foo")
		const symbol2 = Symbol("foo")

		expect(isEqual(symbol1, symbol2 as any)).toBe(false)
	})

	it("bigint", () => {
		expect(isEqual(42n, 42n)).toBe(true)
		expect(isEqual(42n, 43n)).toBe(false)
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
