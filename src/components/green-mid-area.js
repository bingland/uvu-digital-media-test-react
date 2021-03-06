import React from 'react'

import PropTypes from 'prop-types'

import SquareTextInputWhite from './square-text-input-white'
import Component1 from './component1'
import styles from './green-mid-area.module.css'

const GreenMidArea = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
      <SquareTextInputWhite
        rootClassName="rootClassName"
        textinput_placeholder="Search..."
      ></SquareTextInputWhite>
      <span className={styles['text1']}>{props.text1}</span>
      <Component1 button="Advising" rootClassName="rootClassName"></Component1>
      <span className={styles['text2']}>{props.text2}</span>
      <Component1
        button="Scholarships"
        rootClassName="rootClassName1"
      ></Component1>
    </div>
  )
}

GreenMidArea.defaultProps = {
  text: 'Find your perfect degree',
  text1: 'Talk With an Advisor',
  text2: 'Talk With an Advisor',
}

GreenMidArea.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default GreenMidArea
