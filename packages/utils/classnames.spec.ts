import { it, describe, expect } from "vitest"
import { getClasses } from "./classnames"

describe("classnames", () => {
	describe("getClasses", () => {
		it("returns valid with string", () => expect(getClasses("burn")).toEqual("burn"))
		it("returns conditional object", () =>
			expect(getClasses("burn", { "burn--alternative": true })).toEqual("burn burn--alternative"))
		it("returns valid with invalid", () =>
			expect(
				getClasses("burn", null, "burn", undefined, {
					"burn--active": false,
					"burn--loading": true,
				}),
			).toEqual("burn burn--loading"))
	})
})
