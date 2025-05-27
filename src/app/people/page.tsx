import { getPeople } from '@/lib/data-loader';
import PeopleClient from './people-client';

const PeoplePage = () => {
  const peopleData = getPeople();
  
  return <PeopleClient peopleData={peopleData} />;
};

export default PeoplePage; 