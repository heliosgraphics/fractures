type SimpleObject = {
	id: string | number
	value: number
	label: string
	isActive: boolean
}

type NestedObject = {
	id: string
	user: {
		firstName: string
		lastName: string
		email: string
		preferences: { theme: string; notifications: boolean; language: string }
	}
	metadata: { createdAt: string; updatedAt: string; tags: string[]; status: string }
}

type ArrayObject = {
	items: Array<{ id: string; title: string; count: number }>
	filters: { selectedTags: string[]; searchQuery: string; sortBy: string }
	pagination: { page: number; limit: number; total: number }
}

type LargeObject = {
	id: string
	title: string
	description: string
	user: { id: string; name: string; email: string; role: string; permissions: string[] }
	content: {
		sections: Array<{
			id: string
			type: string
			data: Record<string, unknown>
			metadata: { createdAt: string; updatedAt: string; author: string }
		}>
		comments: Array<{
			id: string
			text: string
			userId: string
			replies: Array<{ id: string; text: string; userId: string }>
			metadata: { createdAt: string; updatedAt: string; likes: number }
		}>
	}
	settings: { isPublic: boolean; allowComments: boolean; featured: boolean; categories: string[]; tags: string[] }
	analytics: {
		views: number
		shares: number
		engagement: { likes: number; bookmarks: number; timeSpent: number }
	}
	metadata: { createdAt: string; updatedAt: string; publishedAt: string; version: number; status: string }
}

export const MOCK_SIMPLE_OBJECTS: Record<string, SimpleObject> = {
	first: { id: 1, value: 42, label: "Active Item", isActive: true },
	second: { id: 2, value: 42, label: "Active Item", isActive: true },
	third: { id: 3, value: 50, label: "Inactive Item", isActive: false },
}

export const MOCK_NESTED_OBJECTS: Record<string, NestedObject> = {
	first: {
		id: "user-1",
		user: {
			firstName: "John",
			lastName: "Doe",
			email: "john@example.com",
			preferences: { theme: "light", notifications: true, language: "en" },
		},
		metadata: {
			createdAt: "2023-01-01T00:00:00Z",
			updatedAt: "2023-01-02T00:00:00Z",
			tags: ["important", "featured"],
			status: "published",
		},
	},
	second: {
		id: "user-2",
		user: {
			firstName: "Jane",
			lastName: "Doe",
			email: "jane@example.com",
			preferences: { theme: "dark", notifications: false, language: "es" },
		},
		metadata: {
			createdAt: "2023-01-01T00:00:00Z",
			updatedAt: "2023-01-02T00:00:00Z",
			tags: ["draft"],
			status: "draft",
		},
	},
}

export const MOCK_ARRAY_OBJECTS: Record<string, ArrayObject> = {
	first: {
		items: [
			{ id: "1", title: "First Item", count: 5 },
			{ id: "2", title: "Second Item", count: 10 },
			{ id: "3", title: "Third Item", count: 15 },
		],
		filters: { selectedTags: ["important", "urgent"], searchQuery: "test", sortBy: "desc" },
		pagination: { page: 1, limit: 10, total: 100 },
	},
	second: {
		items: [
			{ id: "1", title: "First Item", count: 5 },
			{ id: "2", title: "Second Item", count: 10 },
			{ id: "3", title: "Third Item", count: 15 },
		],
		filters: { selectedTags: ["important", "urgent"], searchQuery: "test", sortBy: "asc" },
		pagination: { page: 1, limit: 10, total: 100 },
	},
} satisfies Record<string, ArrayObject>

export const MOCK_LARGE_OBJECTS: Record<string, Array<LargeObject>> = {
	first: Array.from({ length: 100 }, (_, i) => ({
		id: `post-${i}`,
		title: `Post Title ${i}`,
		description: `Detailed description for post ${i}`,
		user: {
			id: `user-${i % 10}`,
			name: `User ${i % 10}`,
			email: `user${i % 10}@example.com`,
			role: i % 3 === 0 ? "admin" : i % 2 === 0 ? "user" : "guest",
			permissions: ["read", "write", i % 2 === 0 ? "delete" : "create"],
		},
		content: {
			sections: Array.from({ length: 5 }, (_, j) => ({
				id: `section-${i}-${j}`,
				type: j % 3 === 0 ? "text" : j % 2 === 0 ? "image" : "video",
				data: { content: `Content for section ${j}`, url: `https://example.com/asset/${i}/${j}` },
				metadata: {
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					author: `user-${i % 10}`,
				},
			})),
			comments: Array.from({ length: 3 }, (_, k) => ({
				id: `comment-${i}-${k}`,
				text: `Comment ${k} on post ${i}`,
				userId: `user-${k}`,
				replies: Array.from({ length: 2 }, (_, l) => ({
					id: `reply-${i}-${k}-${l}`,
					text: `Reply ${l} to comment ${k}`,
					userId: `user-${l}`,
				})),
				metadata: {
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					likes: Math.floor(Math.random() * 100),
				},
			})),
		},
		settings: {
			isPublic: i % 2 === 0,
			allowComments: true,
			featured: i % 10 === 0,
			categories: [`category-${i % 5}`, `category-${(i + 1) % 5}`],
			tags: [`tag-${i % 3}`, `tag-${(i + 1) % 3}`, `tag-${(i + 2) % 3}`],
		},
		analytics: {
			views: Math.floor(Math.random() * 10000),
			shares: Math.floor(Math.random() * 1000),
			engagement: {
				likes: Math.floor(Math.random() * 500),
				bookmarks: Math.floor(Math.random() * 100),
				timeSpent: Math.floor(Math.random() * 3600),
			},
		},
		metadata: {
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			publishedAt: new Date().toISOString(),
			version: 1,
			status: i % 3 === 0 ? "draft" : i % 2 === 0 ? "published" : "archived",
		},
	})),
	second: Array.from({ length: 100 }, (_, i) => ({
		id: `post-${i}`,
		title: `Post Title ${i}`,
		description: `Detailed description for post ${i}`,
		user: {
			id: `user-${i % 10}`,
			name: `User ${i % 10}`,
			email: `user${i % 10}@example.com`,
			role: i % 3 === 0 ? "admin" : i % 2 === 0 ? "user" : "guest",
			permissions: ["read", "write", i % 2 === 0 ? "delete" : "create"],
		},
		content: {
			sections: Array.from({ length: 5 }, (_, j) => ({
				id: `section-${i}-${j}`,
				type: j % 3 === 0 ? "text" : j % 2 === 0 ? "image" : "video",
				data: { content: `Content for section ${j}`, url: `https://example.com/asset/${i}/${j}` },
				metadata: {
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					author: `user-${i % 10}`,
				},
			})),
			comments: Array.from({ length: 3 }, (_, k) => ({
				id: `comment-${i}-${k}`,
				text: `Comment ${k} on post ${i}`,
				userId: `user-${k}`,
				replies: Array.from({ length: 2 }, (_, l) => ({
					id: `reply-${i}-${k}-${l}`,
					text: `Reply ${l} to comment ${k}`,
					userId: `user-${l}`,
				})),
				metadata: {
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					likes: Math.floor(Math.random() * 100),
				},
			})),
		},
		settings: {
			isPublic: i % 2 === 0,
			allowComments: true,
			featured: i % 10 === 0,
			categories: [`category-${i % 5}`, `category-${(i + 1) % 5}`],
			tags: [`tag-${i % 3}`, `tag-${(i + 1) % 3}`, `tag-${(i + 2) % 3}`],
		},
		analytics: {
			views: Math.floor(Math.random() * 10000),
			shares: Math.floor(Math.random() * 1000),
			engagement: {
				likes: Math.floor(Math.random() * 500),
				bookmarks: Math.floor(Math.random() * 100),
				timeSpent: Math.floor(Math.random() * 3600),
			},
		},
		metadata: {
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			publishedAt: new Date().toISOString(),
			version: 1,
			status: i % 3 === 0 ? "draft" : i % 2 === 0 ? "published" : "archived",
		},
	})),
} satisfies Record<string, Array<LargeObject>>
