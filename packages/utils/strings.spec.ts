import { it, describe, expect } from "vitest"
import { sanitizeText, removeMarkdown, removeNewlines, middleEllipsis } from "./strings"

describe("strings", () => {
	describe("sanitizeText", () => {
		const TEXT_1 = "a <b onClick=\"alert('hee hee')\">basic</b> tag"

		it("removes an onclick tag", () => expect(sanitizeText(TEXT_1)).toEqual("a <b>basic</b> tag"))
		it("returns empty for undefined", () => expect(sanitizeText(<any>undefined)).toEqual(""))
	})

	describe("removeMarkdown", () => {
		it("removes a bold format", () => expect(removeMarkdown("a **bold** text")).toEqual("a bold text"))
		it("removes a link but keeps the name", () =>
			expect(removeMarkdown("a [link](https://x.com) hello")).toEqual("a link hello"))
		it("removes a bold link", () =>
			expect(removeMarkdown("a [bold **link**](https://x.com) hello")).toEqual("a bold link hello"))
	})

	describe("middleEllipsis", () => {
		it("works with short word", () => expect(middleEllipsis("ellipsis", 5)).toEqual("e...s"))
		it("works with longer word", () => expect(middleEllipsis("lorem ipsum dolor", 12)).toEqual("lore...olor"))
		it("fails silently for undefined", () => expect(middleEllipsis(<any>null, 12)).toEqual(""))
	})

	describe("removeNewlines", () => {
		it("removes no newline", () => expect(removeNewlines("first line same line")).toEqual("first line same line"))
		it("removes newline", () =>
			expect(removeNewlines("first line\n\n\nsecond line\n")).toEqual("first line second line"))
		it("removes r newline", () =>
			expect(removeNewlines("first line\r\n\nsecond line\n")).toEqual("first line second line"))
		it("removes t newline", () => expect(removeNewlines("first line\tsecond line\n")).toEqual("first line second line"))
		it("removes only a newline", () => expect(removeNewlines("\r")).toEqual(""))
		it("removes nothing without newline", () => expect(removeNewlines("hey", undefined)).toEqual("hey"))
		it("cuts string at the right position", () => expect(removeNewlines("ellipsis", 5)).toEqual("ellip"))
		it("skips cutting if unnecessary", () => expect(removeNewlines("ellipsis", 20)).toEqual("ellipsis"))
		it("returns empty string for null", () => expect(removeNewlines(null, 10)).toEqual(""))
		it("returns empty string for undefined", () => expect(removeNewlines(undefined)).toEqual(""))
		it("returns empty string for empty string", () => expect(removeNewlines("", 10)).toEqual(""))
	})
})
