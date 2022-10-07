import Profile from './Profile/Profile';
import userProfile from '../user.json';

export const App = () => {
  return (
    <>
      <Profile profile={userProfile} />
    </>
  );
};
