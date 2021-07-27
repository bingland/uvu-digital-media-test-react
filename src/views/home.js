import React from 'react'

import Helmet from 'react-helmet'

import Navbar from '../components/navbar'
import Component3 from '../components/component3'
import WhiteCardTextBtn from '../components/white-card-text-btn'
import GreenTitleWhiteCard from '../components/green-title-white-card'
import SimpleLineTitle from '../components/simple-line-title'
import NewsEventTile from '../components/news-event-tile'
import GreenMidArea from '../components/green-mid-area'
import TitleWithText from '../components/title-with-text'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>UVU Digital Media Test</title>
        <meta property="og:title" content="UVU Digital Media Test" />
      </Helmet>
      <Navbar></Navbar>
      <div className={styles['container1']}></div>
      <Component3 rootClassName="rootClassName"></Component3>
      <WhiteCardTextBtn rootClassName="rootClassName"></WhiteCardTextBtn>
      <GreenTitleWhiteCard rootClassName="rootClassName"></GreenTitleWhiteCard>
      <div className={styles['container2']}></div>
      <SimpleLineTitle
        text="News &amp; Events"
        rootClassName="rootClassName"
      ></SimpleLineTitle>
      <div className={styles['container3']}></div>
      <NewsEventTile
        text="Read Full Article"
        text1="Digital media Department Share the Untold Stories of Namibian Women"
        rootClassName="rootClassName"
      ></NewsEventTile>
      <div className={styles['container4']}></div>
      <GreenMidArea text2="Look at Scholarships"></GreenMidArea>
      <div className={styles['container5']}></div>
      <TitleWithText></TitleWithText>
    </div>
  )
}

export default Home
