import { it, describe, expect } from "vitest"
import { getSlug } from "./slug"

describe("slug", () => {
	describe("getSlug", () => {
		it("returns valid from string with dashes", () =>
			expect(getSlug("--B—uRn--")).toEqual("-burn-"))
		it("returns valid from special string", () =>
			expect(getSlug("#$%^B#uR#n-")).toEqual("burn-"))
		it("returns valid from parens string", () =>
			expect(getSlug("Gaussian Blur [1](2){3}")).toEqual("gaussian-blur-123"))
		it("replaces àáäâèéëêìíïîòóöôùúüûñç", () =>
			expect(getSlug("àáäâèéëêìíïîòóöôùúüûñç")).toEqual(
				"aaaaeeeeiiiioooouuuunc",
			))
		it("fails silently from undefined", () =>
			expect(getSlug(undefined)).toEqual(""))
		it("fails silently from null", () => expect(getSlug(<any>null)).toEqual(""))
	})
})
