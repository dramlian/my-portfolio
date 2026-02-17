import PersonalProjectDto from "../interfaces/PerosnalProjectDto";
import GitHubRepo from "../interfaces/GitHubRepo";

const GITHUB_USER = "dramlian";
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;
const PORTFOLIO_TOPIC = "portfolio-include";

const githubHeaders: HeadersInit = process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {};


async function fetchLanguages(owner: string, repo: string): Promise<string> {
    const url = `https://api.github.com/repos/${owner}/${repo}/languages`;
    const res = await fetch(url, { headers: githubHeaders, next: { revalidate: 3600 } });
    if (!res.ok) {
        return "";
    }
    const languages: Record<string, number> = await res.json();
    const total = Object.values(languages).reduce((sum, val) => sum + val, 0);
    return Object.entries(languages)
        .map(([lang, bytes]) => `${lang} ${((bytes / total) * 100).toFixed(1)}%`)
        .join(", ");
}

async function fetchCommitCount(owner: string, repo: string, branch: string): Promise<number> {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=1&page=1`;
    const res = await fetch(url, { headers: githubHeaders, next: { revalidate: 3600 } });
    if (!res.ok) {
        return 0;
    }
    const linkHeader = res.headers.get("Link");
    if (!linkHeader) {
        return 1;
    }
    const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
    return match ? parseInt(match[1], 10) : 1;
}

async function fetchReadme(owner: string, repo: string, branch: string): Promise<string> {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/refs/heads/${branch}/README.md`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
        return "*No README available.*";
    }
    return res.text();
}

export async function fetchPersonalProjects(): Promise<PersonalProjectDto[]> {
    const res = await fetch(REPOS_URL, { headers: githubHeaders, next: { revalidate: 3600 } });

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
            const [readmeRaw, techstack, commitCount] = await Promise.all([
                fetchReadme(repo.owner.login, repo.name, repo.default_branch),
                fetchLanguages(repo.owner.login, repo.name),
                fetchCommitCount(repo.owner.login, repo.name, repo.default_branch),
            ]);
            const rawBase = `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}`;
            const readme = readmeRaw
                .replace(/\]\(\.\//g, `](${rawBase}/`)
                .replace(/\]\((?!https?:\/\/|#|\/|\.)([^)]+)\)/g, `](${rawBase}/$1)`);
            return {
                id: repo.id,
                title: repo.name,
                techstack,
                readme,
                lastCommitDate: repo.pushed_at,
                url: repo.html_url,
                commitCount
            };
        })
    );

    return projects;
}
