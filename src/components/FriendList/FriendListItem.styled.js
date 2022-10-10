import styled from 'styled-components';

export const Status = styled.span`
  width: 25px;
  height: 25px;

  display: block;

  background-color: ${p => {
    return p.status ? '#009900' : '#ee0000';
  }};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  margin: 0 20px;
  padding: 5px;

  background-color: #fcfcfc;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;

  color: #222c15;
`;
