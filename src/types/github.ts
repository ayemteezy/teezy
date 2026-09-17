export interface PortfolioRepo {
	id: string;
	name: string;
	description: string | null;
	url: string;
	homepageUrl: string | null;
	createdAt: string;
	languages: string[];
	topics: string[];
}

export interface GetPortfolioReposInput {
	limit?: number;
}

interface GitHubPortfolioRepo {
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

export interface GitHubPortfolioReposResponse {
	data?: {
		search: {
			nodes: GitHubPortfolioRepo[];
		};
	};
	errors?: {
		message: string;
	}[];
}

export interface GitHubLanguage {
	name: string;
	percent: number;
}
