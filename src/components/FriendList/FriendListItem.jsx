import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
