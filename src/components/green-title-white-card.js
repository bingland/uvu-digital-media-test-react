import React from 'react'

import PropTypes from 'prop-types'

import styles from './green-title-white-card.module.css'

const GreenTitleWhiteCard = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <span className={styles['text']}>{props.text}</span>
      </div>
      <div className={styles['container2']}>
        <span className={styles['text1']}>{props.text1}</span>
      </div>
    </div>
  )
}

GreenTitleWhiteCard.defaultProps = {
  rootClassName: '',
  text: 'Title',
  text1:
    'The main campus in Orem, Utah is just one of many UVU facilities located across the state. Other campus sites include Heber City, Provo Airport, Canyon Park, Capitol Reef Field Station, Saratoga Springs, Spanish Fork and more. If youâre planning a visit, be sure to download and print campus maps and driving instructions here.',
}

GreenTitleWhiteCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default GreenTitleWhiteCard
