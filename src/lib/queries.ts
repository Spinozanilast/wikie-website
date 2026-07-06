export async function fetchGithubStargazersCount(
  repo: `${string}/${string}`,
): Promise<number> {
  try {
    const result = await fetch(`https://api.github.com/repos/${repo}`);
    const data = await result.json();
    return data.stargazers_count;
  } catch (error) {
    throw new Error("Failed to fetch stargazers count", { cause: error });
  }
}

export async function fetchGithubReadme(
  repo: `${string}/${string}`,
  branch: string = "main",
): Promise<string> {
  try {
    const result = await fetch(
      `https://raw.githubusercontent.com/${repo}/${branch}/README.md`,
    );
    if (!result.ok) throw new Error(`HTTP ${result.status}`);
    return await result.text();
  } catch (error) {
    throw new Error("Failed to fetch README", { cause: error });
  }
}
