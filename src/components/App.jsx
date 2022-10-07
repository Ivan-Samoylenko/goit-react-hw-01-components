import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import userProfile from '../user.json';
import statisticData from '../data.json';
import friendList from '../friends.json';
// import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile profile={userProfile} />
      <Statistics data={statisticData} title="Upload stats" />
      <FriendList friends={friendList} />
    </>
  );
};
