import { getPeople, getSiteConfig, getTeamMembers } from '@/lib/data-loader';
import PeopleClient from './people-client';

const PeoplePage = () => {
  const peopleData = getPeople();
  const siteConfig = getSiteConfig();
  const teamData = getTeamMembers();
  
  return <PeopleClient peopleData={peopleData} siteConfig={siteConfig} teamData={teamData} />;
};

export default PeoplePage; 