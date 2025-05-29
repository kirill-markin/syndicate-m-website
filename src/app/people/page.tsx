import { peopleData } from "@/data/people";
import PeopleClient from "./people-client";

const PeoplePage = () => {
  return <PeopleClient peopleData={peopleData} />;
};

export default PeoplePage;
