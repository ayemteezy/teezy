export const MARKERS = [
	{
		id: "manila",
		location: [14.5995, 120.9842] as [number, number],
		label: "Manila · Home",
	},
	{
		id: "sf",
		location: [37.7595, -122.4367] as [number, number],
		label: "San Francisco",
	},
	{
		id: "nyc",
		location: [40.7128, -74.006] as [number, number],
		label: "New York",
	},
	{
		id: "london",
		location: [51.5074, -0.1278] as [number, number],
		label: "London",
	},
	{
		id: "sydney",
		location: [-33.8688, 151.2093] as [number, number],
		label: "Sydney",
	},
	{
		id: "singapore",
		location: [1.3521, 103.8198] as [number, number],
		label: "Singapore",
	},
	{
		id: "tokyo",
		location: [35.6762, 139.6503] as [number, number],
		label: "Tokyo",
	},
];

export const ARCS = [
	{
		id: "manila-sf",
		from: [14.5995, 120.9842] as [number, number],
		to: [37.7595, -122.4367] as [number, number],
	},
	{
		id: "manila-nyc",
		from: [14.5995, 120.9842] as [number, number],
		to: [40.7128, -74.006] as [number, number],
	},
	{
		id: "manila-london",
		from: [14.5995, 120.9842] as [number, number],
		to: [51.5074, -0.1278] as [number, number],
	},
	{
		id: "manila-sydney",
		from: [14.5995, 120.9842] as [number, number],
		to: [-33.8688, 151.2093] as [number, number],
	},
	{
		id: "manila-singapore",
		from: [14.5995, 120.9842] as [number, number],
		to: [1.3521, 103.8198] as [number, number],
	},
];
