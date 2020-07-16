import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

Section.ptopTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
