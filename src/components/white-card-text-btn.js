import React from 'react'

import PropTypes from 'prop-types'

import GreenFilledBtn from './green-filled-btn'
import styles from './white-card-text-btn.module.css'

const WhiteCardTextBtn = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}></span>
      <span className={styles['text1']}>{props.text}</span>
      <span className={styles['text2']}>{props.text1}</span>
      <GreenFilledBtn></GreenFilledBtn>
    </div>
  )
}

WhiteCardTextBtn.defaultProps = {
  text: 'Title',
  text1:
    'Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sagittis vitae et leo duis ut diam quam nulla porttitor. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Sit amet purus gravida quis blandit turpis.',
  rootClassName: '',
}

WhiteCardTextBtn.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default WhiteCardTextBtn
