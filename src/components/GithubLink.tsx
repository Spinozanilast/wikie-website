import { GithubLogoIcon, SpinnerIcon, StarIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchGithubStargazersCount } from "~lib/queries";

export const DefaultStargazersCount = 0;

function GithubLink({
  repo = "spinozanilast/wikie",
}: {
  repo?: Parameters<typeof fetchGithubStargazersCount>[0];
}) {
  const [stargazersCount, setStargazersCount] = useState(
    DefaultStargazersCount,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchGithubStargazersCount(repo)
      .then((count) => {
        setStargazersCount(count);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [repo]);

  return (
    <a
      className="link flex items-center gap-1"
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {loading ? (
        <SpinnerIcon size={10} className="animate-spin transition-transform" />
      ) : (
        stargazersCount > 0 && (
          <>
            {stargazersCount}
            <StarIcon size={15} />
          </>
        )
      )}
      <GithubLogoIcon size={32} />
    </a>
  );
}

export default GithubLink;
