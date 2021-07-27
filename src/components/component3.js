import React from 'react'

import PropTypes from 'prop-types'

import styles from './component3.module.css'

const Component3 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}></div>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Component3.defaultProps = {
  text: '1940 - 1970',
  rootClassName: '',
}

Component3.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component3
