import React from 'react'

import PropTypes from 'prop-types'

import styles from './old-white-card-text-btn.module.css'

const OldWhiteCardTextBtn = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}></span>
      <span className={styles['text1']}>{props.text}</span>
      <span className={styles['text2']}>{props.text1}</span>
      <div className={styles['container1']}>
        <span className={styles['text3']}>{props.text2}</span>
        <span className={styles['text4']}></span>
      </div>
    </div>
  )
}

OldWhiteCardTextBtn.defaultProps = {
  text: 'Title',
  text1:
    'paragraph text paragraph text paragraph text paragraph text paragraph text paragraph text paragraph text paragraph text ',
  text2: 'Learn More',
}

OldWhiteCardTextBtn.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default OldWhiteCardTextBtn
