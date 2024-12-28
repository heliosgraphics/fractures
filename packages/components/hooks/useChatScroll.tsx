"use client"

import { useRef, useEffect, type RefObject } from "react"

export const useChatScroll = (dependencies: Array<unknown>): RefObject<HTMLDivElement> => {
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (ref.current) {
			ref.current.scrollTop = ref.current.scrollHeight
		}
	}, [dependencies])

	return ref
}
