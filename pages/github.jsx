import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

// Helper function to shuffle an array
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.gitHead}>
        {user.avatar_url && (
          <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={120}
              height={120}
            />
          </a>
        )}

        <div> <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer" className={styles.links}>
          <h3 className={styles.username}>{user.login}</h3>
          <div className={styles.userInfo}>
            <div className={styles.user}>{user.followers} followers</div>
            <div className={styles.user}>{user.public_repos} repos</div>
          </div>
        </a>

        <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer" className={styles.links}>
       <button className={styles.button}>Open GitHub</button></a>
        </div>
      </div>


      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    let repos = await repoRes.json();

    // Ensure repos is an array
    if (Array.isArray(repos)) {
      // Shuffle repositories
      repos = shuffleArray(repos);

      // Select the top 4 repositories from the shuffled list
      repos = repos.slice(0, 4);
    } else {
      repos = [];
    }

    return {
      props: { title: 'GitHub', repos, user },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { title: 'GitHub', repos: [], user: {} },
      revalidate: 10,
    };
  }
}

export default GithubPage;
