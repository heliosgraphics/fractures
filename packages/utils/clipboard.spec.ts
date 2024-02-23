import { describe, it, expect, vi } from "vitest"
import { copyValue } from "./clipboard"

const TEXT_STRING = "Test text" as const

describe("copyValue", () => {
	it("copies text to the clipboard", () => {
		const createElementMock: any = {
			value: "",
			select: vi.fn(),
			remove: vi.fn(),
		}

		const spyCreateElement = vi.spyOn(document, "createElement").mockImplementation(() => createElementMock)
		const spyAppendChild = vi.spyOn(document.body, "appendChild").mockImplementation((node) => node)

		document.execCommand = vi.fn()

		copyValue(TEXT_STRING)
		expect(spyCreateElement).toHaveBeenCalledWith("input")
		expect(spyAppendChild).toHaveBeenCalled()
		expect(document.execCommand).toHaveBeenCalledWith("copy", false)

		const inputElement: HTMLInputElement = spyCreateElement.mock.results[0].value
		expect(inputElement.value).toBe(TEXT_STRING)

		spyCreateElement.mockRestore()
		spyAppendChild.mockRestore()
	})
})
