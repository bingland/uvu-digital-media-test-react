import React from 'react'

import PropTypes from 'prop-types'

import styles from './simple-line-title.module.css'

const SimpleLineTitle = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <span className={styles['text']}>{props.text}</span>
      </div>
    </div>
  )
}

SimpleLineTitle.defaultProps = {
  text: 'Text',
  rootClassName: '',
}

SimpleLineTitle.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SimpleLineTitle
