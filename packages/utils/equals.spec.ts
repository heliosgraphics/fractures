import { getEqual, getSetsEqual } from "./equals"
import { describe, it, expect } from "vitest"

describe("getEqual", () => {
	it("primitives", () => {
		expect(getEqual(1, 1)).toBe(true)
		expect(getEqual("hello", "hello")).toBe(true)
		expect(getEqual(" ", " ")).toBe(true)
		expect(getEqual("❤️", "❤️")).toBe(true)
		expect(getEqual(true, true)).toBe(true)
		expect(getEqual(null, null)).toBe(true)
		expect(getEqual(undefined, undefined)).toBe(true)
		expect(getEqual(1, 2)).toBe(false)
		expect(getEqual("hello", "world")).toBe(false)
		expect(getEqual(true, false)).toBe(false)
		expect(getEqual(null, undefined)).toBe(false)
	})

	it("arrays", () => {
		expect(getEqual([], [])).toBe(true)
		expect(getEqual([1, 2, 3], [1, 2, 3])).toBe(true)
		expect(getEqual([1, [2, 3]], [1, [2, 3]])).toBe(true)
		expect(getEqual([1, 2], [1, 2, 3])).toBe(false)
		expect(getEqual([1, 2, 3], [1, 3, 2])).toBe(false)
	})

	it("objects", () => {
		expect(getEqual({}, {})).toBe(true)
		expect(getEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
		expect(getEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true)
		expect(getEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
		expect(getEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
		expect(getEqual({ a: 1 }, { a: 2 })).toBe(false)
	})

	it("dates", () => {
		const date1 = new Date("2024-01-01")
		const date2 = new Date("2024-01-01")
		const date3 = new Date("2024-01-02")

		expect(getEqual(date1, date2)).toBe(true)
		expect(getEqual(date1, date3)).toBe(false)
	})

	it("sets", () => {
		const basicSet1 = new Set(["hello", 2, 3])
		const basicSet2 = new Set(["hello", 2, 3])
		const basicSet3 = new Set(["hello", 2, "3"])

		expect(getEqual(basicSet1, basicSet2)).toBe(true)
		expect(getEqual(basicSet1, basicSet3)).toBe(false)

		const objectSet1 = new Set([{ a: 1 }, { b: 2 }])
		const objectSet2 = new Set([{ a: 1 }, { b: 2 }])
		const objectSet3 = new Set([{ a: 1 }, { b: 3 }])

		expect(getSetsEqual(objectSet1, objectSet2)).toBe(true)
		expect(getSetsEqual(objectSet1, objectSet3)).toBe(false)

		const nestedSet1 = new Set([{ a: { b: 2 } }, [1, 2, 3]])
		const nestedSet2 = new Set([{ a: { b: 2 } }, [1, 2, 3]])
		const nestedSet3 = new Set([{ a: { b: 3 } }, [1, 2, 3]])

		expect(getSetsEqual(nestedSet1, nestedSet2)).toBe(true)
		expect(getSetsEqual(nestedSet1, nestedSet3)).toBe(false)

		const emptySet1 = new Set()
		const emptySet2 = new Set()

		expect(getSetsEqual(emptySet1, emptySet2)).toBe(true)
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

		expect(getEqual(map1, map2)).toBe(true)
		expect(getEqual(map1, map3)).toBe(false)
	})

	it("circular references", () => {
		const obj1: any = { a: 1 }
		const obj2: any = { a: 1 }

		obj1.self = obj1
		obj2.self = obj2

		expect(getEqual(obj1, obj2)).toBe(true)
	})

	it("symbols are unique", () => {
		const symbol1 = Symbol("foo")
		const symbol2 = Symbol("foo")

		expect(getEqual(symbol1, symbol2 as any)).toBe(false)
	})

	it("bigint", () => {
		expect(getEqual(42n, 42n)).toBe(true)
		expect(getEqual(42n, 43n)).toBe(false)
	})
})
