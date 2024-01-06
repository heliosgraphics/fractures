import { it, describe, expect } from "vitest"
import { getUUID, isUUID, TEST_UUID } from "./uuid"

describe("validations", () => {
	describe("getUUID", () => {
		const MOCK_UUID = getUUID()

		it("returns test uuid", () =>
			expect(getUUID(MOCK_UUID)).toEqual(TEST_UUID))
		it("returns any string", () =>
			expect(getUUID("any-string")).toEqual("any-string"))
	})

	describe("isUUID", () => {
		it("validates test uuid", () => expect(isUUID(TEST_UUID)).toEqual(true))
		it("validates a random uuid", () =>
			expect(isUUID("101bfe56-8c16-4f94-9b45-759ea5e67cea")).toEqual(
				true,
			))
		it("catches empty string", () => expect(isUUID("")).toEqual(false))
		it("catches undefined", () =>
			expect(isUUID(<any>undefined)).toEqual(false))
	})
})
