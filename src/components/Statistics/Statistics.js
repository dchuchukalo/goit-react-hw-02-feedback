import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => (
  <>
    {Object.keys(props).map(option => {
      return (
        <p className={styles.statItem} key={option}>
          {option === 'positivePercentage' ? 'positive feedback' : option}:{' '}
          {props[option]}
        </p>
      );
    })}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
