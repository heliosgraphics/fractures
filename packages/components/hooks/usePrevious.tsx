"use client"

import { useEffect, useRef } from "react"

export const usePrevious = (value: any): any => {
	const ref = useRef<unknown>(value)

	useEffect(() => {
		ref.current = value
	}, [value])

	return ref.current
}
