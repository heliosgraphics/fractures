import crypto from "crypto"

const IS_TEST: boolean = process.env.NODE_ENV === "test"
export const TEST_UUID: string = "00000000-0000-0000-0000-000000000000" as const

export const getUUID = (id?: unknown) => {
	if (!!id) return id

	// this is necessary for snapshot tests, but should be dynamic.
	if (IS_TEST) return TEST_UUID

	return crypto.randomUUID()
}

export const isUUID = (uuid?: unknown): boolean => {
	const uuidRegex =
		/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
	const isValid = typeof uuid === "string"

	if (!isValid) return false

	return uuidRegex.test(uuid)
}
