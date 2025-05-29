import { peopleData } from "@/data/people";
import PeopleClient from "./people-client";

const PeoplePage = () => {
  // const siteConfig = getSiteConfig();
  // const teamData = getTeamMembers();

  return <PeopleClient peopleData={peopleData} />;
};

export default PeoplePage;
