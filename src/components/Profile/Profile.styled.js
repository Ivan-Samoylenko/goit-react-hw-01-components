import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 240px;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #c5fb73;
  border-radius: 10px;
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  margin-bottom: 20px;

  background-color: #fcfcfc;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;

  color: #222c15;
`;

export const Tag = styled.p`
  margin-bottom: 10px;

  font-size: 16px;
  font-weight: 500;

  color: #506630;
`;

export const Location = styled.p`
  font-size: 16px;
  font-weight: 500;

  color: #506630;
`;

export const StatsList = styled.ul`
  display: flex;

  background-color: #94bc57;

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: inset 0 1px 0 0 #506630;
`;

export const StatsItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-basis: calc(100% / 3);

  :not(:last-child) {
    box-shadow: inset -1px 0 0 0 #506630;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;

  color: #506630;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
