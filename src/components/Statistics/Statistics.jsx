import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ data, title }) => {
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatList>
        {data.map(dataItem => {
          return (
            <StatListItem key={dataItem.id} label={dataItem.label}>
              <Label>{dataItem.label}</Label>
              <Percentage>{dataItem.percentage}%</Percentage>
            </StatListItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};

export default Statistics;
