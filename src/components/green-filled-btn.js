import React from 'react'

import PropTypes from 'prop-types'

import styles from './green-filled-btn.module.css'

const GreenFilledBtn = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

GreenFilledBtn.defaultProps = {
  text: 'Learn More',
}

GreenFilledBtn.propTypes = {
  text: PropTypes.string,
}

export default GreenFilledBtn
