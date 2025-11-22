export const presentations = [
	{
		id: "sample",
		name: "Welcome to My Slides",
		href: "/presentation/sample" as const,
	},
	{
		id: "spurs",
		name: "Welcome to spurs",
		href: "/presentation/spurs" as const,
	},
	{
		id: "tacos",
		name: "Welcome to My Slides",
		href: "/presentation/tacos" as const,
	},
] as const;

export type Presentation = (typeof presentations)[number];
