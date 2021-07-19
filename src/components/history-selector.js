import React from 'react'

import PropTypes from 'prop-types'

import styles from './history-selector.module.css'

const HistorySelector = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}></div>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

HistorySelector.defaultProps = {
  text: '1940 - 1970',
}

HistorySelector.propTypes = {
  text: PropTypes.string,
}

export default HistorySelector
