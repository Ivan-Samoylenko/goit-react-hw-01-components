import PropTypes from 'prop-types';
import { FriendNotitia, FriendNotitiaItem } from './FriendList.styled';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <FriendNotitia>
      {friends.map(friend => {
        return (
          <FriendNotitiaItem key={friend.id}>
            <FriendListItem friend={friend} />
          </FriendNotitiaItem>
        );
      })}
    </FriendNotitia>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
