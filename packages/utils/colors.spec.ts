import { it, describe, expect } from "vitest"
import { rgbToHex, hexToRgb, DEFAULT_PROFILE_RGB } from "./colors"

describe("colors", () => {
	describe("hexToRgb", () => {
		it("converts hex to rgb", () =>
			expect(hexToRgb("#0c2c78")).toEqual([12, 44, 120]))
		it("returns default for 0", () =>
			expect(hexToRgb(<any>0)).toEqual(DEFAULT_PROFILE_RGB))
		it("returns default for undefined", () =>
			expect(hexToRgb(<any>undefined)).toEqual(DEFAULT_PROFILE_RGB))
	})

	describe("rgbToHex", () => {
		it("converts rgb to hex", () =>
			expect(rgbToHex(12, 44, 120)).toEqual("#0c2c78"))
		it("converts string to hex", () =>
			expect(rgbToHex(<any>"12", <any>"44", <any>"120")).toEqual(
				"#0c2c78",
			))
		it("converts null to hex", () =>
			expect(rgbToHex(<any>null, 44, 120)).toEqual("#002c78"))
		it("returns undefined to hex", () =>
			expect(rgbToHex(12, <any>undefined, 120)).toEqual("#0cff78"))
	})
})
