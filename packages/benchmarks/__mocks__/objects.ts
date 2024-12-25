type SimpleObject = {
	a: number
	b: number
}

type NestedObject = {
	a: number
	b: string
	c: {
		d: number
		e: Array<string>
		f: {
			g: boolean
			h: number
		}
	}
}

type ArrayObject = {
	numbers: Array<number>
	strings: Array<string>
	mixed: Array<number | string>
}

export const MOCK_SIMPLE_OBJECTS = {
	first: { a: 1, b: 2 },
	second: { a: 1, b: 2 },
	third: { a: 1, b: 3 },
} satisfies Record<string, SimpleObject>

export const MOCK_NESTED_OBJECTS = {
	first: {
		a: 1,
		b: "test",
		c: {
			d: 123,
			e: ["a", "b", "c"],
			f: {
				g: true,
				h: 456,
			},
		},
	},
	second: {
		a: 1,
		b: "test",
		c: {
			d: 123,
			e: ["a", "b", "c"],
			f: {
				g: true,
				h: 457,
			},
		},
	},
} satisfies Record<string, NestedObject>

export const MOCK_ARRAY_OBJECTS = {
	first: {
		numbers: [1, 2, 3, 4, 5],
		strings: ["a", "b", "c"],
		mixed: [1, "two", 3, "four"],
	},
	second: {
		numbers: [1, 2, 3, 4, 5],
		strings: ["a", "b", "c"],
		mixed: [1, "two", 3, "four"],
	},
} satisfies Record<string, ArrayObject>

export const MOCK_LARGE_OBJECTS = {
	first: Array.from({ length: 1000 }, (_, i) => ({
		id: i,
		value: Math.random(),
		text: `Item ${i}`,
		active: i % 2 === 0,
		metadata: {
			created: new Date().toISOString(),
			modified: new Date().toISOString(),
			tags: [`tag${i}`, `category${i % 10}`],
		},
	})),
	second: Array.from({ length: 1000 }, (_, i) => ({
		id: i,
		value: Math.random(),
		text: `Item ${i}`,
		active: i % 2 === 0,
		metadata: {
			created: new Date().toISOString(),
			modified: new Date().toISOString(),
			tags: [`tag${i}`, `category${i % 10}`],
		},
	})),
}
