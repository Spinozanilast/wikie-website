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
