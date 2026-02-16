import PersonalProjectDto from "../interfaces/PerosnalProjectDto";

const GITHUB_USER = "dramlian";
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;
const PORTFOLIO_TOPIC = "portfolio-include";

interface GitHubRepo {
    id: number;
    name: string;
    language: string | null;
    pushed_at: string;
    default_branch: string;
    topics: string[];
    owner: {
        login: string;
    };
}

async function fetchReadme(owner: string, repo: string, branch: string): Promise<string> {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
        return "*No README available.*";
    }
    return res.text();
}

export async function fetchPersonalProjects(): Promise<PersonalProjectDto[]> {
    const res = await fetch(REPOS_URL, { next: { revalidate: 3600 } });

    if (!res.ok) {
        console.error("Failed to fetch repos from GitHub", res.status);
        return [];
    }

    const repos: GitHubRepo[] = await res.json();

    const portfolioRepos = repos.filter((repo) =>
        repo.topics?.includes(PORTFOLIO_TOPIC)
    );

    const projects: PersonalProjectDto[] = await Promise.all(
        portfolioRepos.map(async (repo) => {
            const readme = await fetchReadme(repo.owner.login, repo.name, repo.default_branch);
            return {
                id: repo.id,
                title: repo.name,
                techstack: repo.language ?? "",
                readme,
                lastCommitDate: repo.pushed_at,
            };
        })
    );

    return projects;
}
