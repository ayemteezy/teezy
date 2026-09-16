import type { GearGroup } from "@/types/gear";

export const GEARS: GearGroup[] = [
	{
		category: "computer",
		gears: [
			{
				image: "/images/laptop.png",
				name: "Lenovo Ideapad Gaming 3 15ARH7",
				description: "Ryzen 5 6600H · RTX 3050 · 16GB RAM · 512GB SSD",
			},
		],
	},
	{
		category: "peripherals",
		gears: [
			{
				image: "/images/keyboard.png",
				name: "Langtu LT104",
				description: "Daily driver for coding and writing.",
			},
			{
				image: "/images/mouse.png",
				name: "Lenovo Ideapad Gaming M100",
				description: "Paired with the Ideapad for everyday use.",
			},
		],
	},
	{
		category: "workspace",
		gears: [
			{
				image: "/images/desk-table.png",
				name: "Walnut-Top Coffee Table",
				description: "Doubles as my main desk.",
			},
			{
				image: "/images/laptop-stand.png",
				name: "Wooden Foldable Laptop Stand",
				description: "Props the laptop up to eye level.",
			},
		],
	},
	{
		category: "accessories",
		gears: [
			{
				image: "/images/iem.png",
				name: "TRN MT1",
				description: "Go-to for focused work on the go.",
			},
			{
				image: "/images/powerbank.png",
				name: "Rapoo 30000mAh",
				description: "Lives in my bag for full days out.",
			},
		],
	},
];
