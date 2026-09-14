export interface PinnedRepo {
	id: string;
	name: string;
	description: string | null;
	url: string;
	homepageUrl: string | null;
	languages: string[];
	topics: string[];
}

export interface GetPinnedReposInput {
	limit?: number;
}

export interface GitHubPinnedRepo {
	id: string;
	name: string;
	description: string | null;
	url: string;
	homepageUrl: string | null;
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
