import {
	FolderGit2Icon,
	HomeIcon,
	SquareTextIcon,
	UserIcon,
} from "lucide-react";

export const APP_ROUTES = [
	{
		label: "home",
		href: "/",
		icon: HomeIcon,
	},
	{
		label: "about",
		href: "/about",
		icon: UserIcon,
	},
	{
		label: "projects",
		href: "/projects",
		icon: FolderGit2Icon,
	},
	{
		label: "blog",
		href: "/blog",
		icon: SquareTextIcon,
	},
];
