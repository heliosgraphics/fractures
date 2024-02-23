export type CallbackFunction = (...args: Array<unknown>) => void

// debounces the function with wait time passed
export const debounce = (callback: CallbackFunction, wait: number): CallbackFunction => {
	let timeoutId: any

	return (...args: Array<unknown>) => {
		globalThis.clearTimeout(timeoutId)

		timeoutId = globalThis.setTimeout(() => {
			callback.apply(null, args)
		}, wait)
	}
}
