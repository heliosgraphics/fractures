import { it, describe, expect } from "vitest"
import { getUUID, isUUID } from "./uuid"

describe("validations", () => {
	describe("getUUID", () => {
		const UUID_1 = getUUID()
		const UUID_1_IS_VALID = isUUID(UUID_1)
		const UUID_2_STRING = "any-string"
		const UUID_2 = getUUID(UUID_2_STRING)

		it("returns a valid uuid", () => expect(UUID_1_IS_VALID).toEqual(true))
		it("returns passed through", () => expect(UUID_2).toEqual(UUID_2_STRING))
	})

	describe("isUUID", () => {
		const UUID_3 = getUUID()
		const UUID_3_IS_VALID = isUUID(UUID_3)
		const UUID_4_IS_VALID = isUUID("101bfe56-8c16-4f94-9b45-759ea5e67cea")

		it("validates a random uuid", () => expect(UUID_3_IS_VALID).toEqual(true))
		it("validates a static uuid", () => expect(UUID_4_IS_VALID).toEqual(true))

		const UUID_5_IS_VALID = isUUID(<any>"")
		const UUID_6_IS_VALID = isUUID(<any>undefined)

		it("catches empty string", () => expect(UUID_5_IS_VALID).toEqual(false))
		it("catches undefined", () => expect(UUID_6_IS_VALID).toEqual(false))
	})
})
