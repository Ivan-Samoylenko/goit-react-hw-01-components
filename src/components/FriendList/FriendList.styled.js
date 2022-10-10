import styled from 'styled-components';

export const FriendNotitia = styled.ul`
  width: 360px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: #c5fb73;
`;

export const FriendNotitiaItem = styled.li`
  padding: 5px 20px;

  display: flex;
  align-items: center;

  background-color: #c5fb73;

  border-radius: 10px;
  box-shadow: 1px 2px 2px 0 #506630, 0 0 2px 0 #506630;
`;
