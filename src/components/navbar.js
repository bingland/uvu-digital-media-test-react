import React from 'react'

import PropTypes from 'prop-types'

import styles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image']}
          />
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className={styles['image1']}
          />
        </div>
        <div className={styles['container3']}>
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className={styles['image2']}
          />
          <span className={styles['text']}>
            <span>
              COLLEGE OF ENGINEERING &amp;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>TECHNOLOGY (CET)</span>
          </span>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  image_src: '/playground_assets/searchgreen-1200h.png',
  image_alt: 'image',
  image_src1: '/playground_assets/hamburgergreen-1200h.png',
  image_alt1: 'image',
  image_alt2: 'image',
  image_src2: '/playground_assets/uvulogomin.svg',
}

Navbar.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
}

export default Navbar
