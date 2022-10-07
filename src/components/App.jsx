import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import userProfile from '../user.json';
import statisticData from '../data.json';

export const App = () => {
  return (
    <>
      <Profile profile={userProfile} />
      <Statistics data={statisticData} title="Upload stats" />
    </>
  );
};
