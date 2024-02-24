import { validateUrl, validateEmail } from "./validations"
import { it, describe, expect } from "vitest"

describe("validations", () => {
	describe("validateEmail", () => {
		it("validates email", () => expect(validateEmail("x@x.com")).toEqual(true))
		it("validates email with +", () => expect(validateEmail("x+x@x.com")).toEqual(true))
		it("validates email with long tld", () => expect(validateEmail("0@helios.graphics")).toEqual(true))
		it("catches long invalid string", () => expect(validateEmail("@space.city")).toEqual(false))
		it("catches empty string", () => expect(validateEmail("")).toEqual(false))
		it("catches undefined", () => expect(validateEmail(<any>undefined)).toEqual(false))
		it("catches multi @", () => expect(validateEmail("x@@x.com")).toEqual(false))
		it("catches a weird one", () => expect(validateEmail("x@@@x.com@/@x.com")).toEqual(false))
	})

	describe("validateHttpUrl", () => {
		it("validates url", () => expect(validateUrl("https://x.com")).toEqual(true))
		it("validates url with long tld", () => expect(validateUrl("https://lorem-ipsum.graphics")).toEqual(true))
		it("validates url with double subdomain", () => expect(validateUrl("https://0.x.x.com")).toEqual(true))
		it("catches ftp", () => expect(validateUrl("ftp://x.com")).toEqual(false))
		it("catches string containing url", () => expect(validateUrl("lorem ipsum https://x.com")).toEqual(false))
		it("catches unsafe http", () => expect(validateUrl("http://x.com")).toEqual(false))
		it("catches empty string", () => expect(validateUrl("")).toEqual(false))
		it("catches undefined", () => expect(validateUrl(<any>undefined)).toEqual(false))
	})
})
