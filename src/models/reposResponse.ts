export interface RepoResponse {
  repoName: string;
  description: string;
  totalStargazers: number;
  totalWatchers: number;
  repoLink: string;
}

export interface RepoErrorResponse {
  message: string;
}

export interface NotFoundResponse {
  notFound: boolean;
}