import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component1.module.css'

const Component1 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button className={` ${projectStyles['thqButton']} ${styles['button']} `}>
        {props.button}
      </button>
    </div>
  )
}

Component1.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Component1
