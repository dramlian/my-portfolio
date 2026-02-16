export default interface GitHubRepo {
    id: number;
    name: string;
    language: string | null;
    pushed_at: string;
    default_branch: string;
    topics: string[];
    owner: {
        login: string;
    };
    html_url: string;
}