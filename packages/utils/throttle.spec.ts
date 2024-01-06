import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { throttle, type CallbackFunction } from "./throttle"

describe("throttle", () => {
	let callback: CallbackFunction
	let throttledFunction: CallbackFunction

	beforeEach(() => {
		vi.useFakeTimers()
		callback = vi.fn()
		throttledFunction = throttle(callback, 1000)
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it("calls the callback at most once within the specified time", () => {
		throttledFunction()
		throttledFunction()
		throttledFunction()

		vi.advanceTimersByTime(500)
		expect(callback).toHaveBeenCalledTimes(1)

		vi.advanceTimersByTime(500)
		expect(callback).toHaveBeenCalledTimes(1)

		vi.advanceTimersByTime(500)
		throttledFunction()
		expect(callback).toHaveBeenCalledTimes(2)
	})
})
