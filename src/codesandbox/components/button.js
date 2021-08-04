import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import styles from './button.module.css'

const Button = (props) => {
  return (
    <Link to="/Frame29124">
      <div
        className={` ${styles['Button9715']} ${
          styles[props.instanceClassName]
        } `}
      >
        <span className={styles['text']}>
          Start coding visually - it’s free
        </span>
      </div>
    </Link>
  )
}

Button.defaultProps = {
  instanceClassName: '',
}

Button.propTypes = {
  instanceClassName: PropTypes.string,
}

export default Button
