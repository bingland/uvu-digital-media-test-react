import React from 'react'

import PropTypes from 'prop-types'

import styles from './title-with-text.module.css'

const TitleWithText = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>
        <span className={styles['text2']}>
          The mission of the College of Engineering &amp; Technology is to
          prepare students for successful careers or advanced study in a
          dynamic, technology-based, global environment.
        </span>
      </span>
    </div>
  )
}

TitleWithText.defaultProps = {
  text: 'Engineer Your Future',
}

TitleWithText.propTypes = {
  text: PropTypes.string,
}

export default TitleWithText
