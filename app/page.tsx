import PersonalProjects from "./components/PersonalProjects";
import { fetchPersonalProjects } from "./actions/githubfetcher";

export default async function Home() {
  const personalProjects = await fetchPersonalProjects();

  return (
    <div>
      <PersonalProjects personalProjects={personalProjects} />
    </div>
  );
}
