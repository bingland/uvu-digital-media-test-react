import React from 'react'

import PropTypes from 'prop-types'

import styles from './news-event-tile.module.css'

const NewsEventTile = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <span className={styles['text']}>{props.text1}</span>
        <div className={styles['container2']}>
          <span className={styles['text1']}>{props.text}</span>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className={styles['image1']}
          />
        </div>
      </div>
    </div>
  )
}

NewsEventTile.defaultProps = {
  image_src: '/playground_assets/image4-1000h.png',
  text1: 'Dui vivamus arcu felis bibendum ut tristique et egestas.',
  image_alt1: 'image',
  rootClassName: '',
  text: 'Read Article...',
  image_alt: 'image',
  image_src1: '/playground_assets/iconmonstr-arrow-31-240-1000h.png',
}

NewsEventTile.propTypes = {
  image_src: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
}

export default NewsEventTile
