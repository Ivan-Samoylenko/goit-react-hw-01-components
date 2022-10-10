import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 400px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;

  background-color: #c5fb73;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;

  color: #506630;

  line-height: 4;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatListItem = styled.li`
  width: 80px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fcfcfc;
  background-color: ${p => {
    return `${p.label === '.pdf' ? '#fc2403' : ''}${
      p.label === '.docx' ? '#0685c4' : ''
    }${p.label === '.mp3' ? '#9845e6' : ''}${
      p.label === '.psd' ? '#022b1c' : ''
    }`;
  }};
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
