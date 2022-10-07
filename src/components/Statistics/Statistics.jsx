import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css['stat-list']}>
        {data.map(dataItem => {
          return (
            <li
              className={css.item}
              key={dataItem.id}
              style={{ backgroundColor: getBgColor() }}
            >
              <span className={css.label}>{dataItem.label}</span>
              <span className={css.percentage}>{dataItem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
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

function getBgColor() {
  return `rgb(${50 + Math.floor(Math.random() * 91)}, ${
    50 + Math.floor(Math.random() * 91)
  }, ${50 + Math.floor(Math.random() * 91)})`;
}

export default Statistics;
