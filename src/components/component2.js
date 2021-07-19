import React from 'react'

import PropTypes from 'prop-types'

import styles from './component2.module.css'

const Component2 = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}></span>
      <span className={styles['text1']}>{props.text}</span>
      <div className={styles['container1']}>
        <span className={styles['text2']}>{props.text1}</span>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  text1: 'paragraph text',
  text: 'Title Text',
}

Component2.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Component2
