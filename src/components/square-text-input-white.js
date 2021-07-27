import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './square-text-input-white.module.css'

const SquareTextInputWhite = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className={` ${projectStyles['thqTextInput']} ${styles['textinput']} `}
      />
    </div>
  )
}

SquareTextInputWhite.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'placeholder',
}

SquareTextInputWhite.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default SquareTextInputWhite
