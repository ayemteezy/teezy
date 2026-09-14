export interface PinnedRepo {
	id: string;
	name: string;
	description: string | null;
	url: string;
	homepageUrl: string | null;
	createdAt: string;
	languages: string[];
	topics: string[];
}

export interface GetPinnedReposInput {
	limit?: number;
}

interface GitHubPinnedRepo {
	id: string;
	name: string;
	description: string | null;
	url: string;
	homepageUrl: string | null;
	createdAt: string;
	languages: {
		nodes: {
			name: string;
		}[];
	};
	repositoryTopics: {
		nodes: {
			topic: {
				name: string;
			};
		}[];
	};
}

export interface GitHubPinnedReposResponse {
	data?: {
		user: {
			pinnedItems: {
				nodes: GitHubPinnedRepo[];
			};
		} | null;
	};
	errors?: {
		message: string;
	}[];
}

export interface GitHubLanguage {
	name: string;
	percent: number;
}
