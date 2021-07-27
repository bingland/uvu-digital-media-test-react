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
      <div style={{margin: '20px 0'}}><TitleWithText></TitleWithText></div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr', gridGap: 10, margin: '20px 0'}}>
        <Component3 text="1940-1970"></Component3>
        <Component3 text="1970-2000"></Component3>
        <Component3 text="2000-2020"></Component3>
      </div>
      
      <SimpleLineTitle
        text="News &amp; Events"
        rootClassName="rootClassName"
      ></SimpleLineTitle>
      <NewsEventTile
        text1="Digital media Department Share the Untold Stories of Namibian Women"
        rootClassName="rootClassName"
      ></NewsEventTile>
      <NewsEventTile
        text="Read Full Article"
        text1="Some Cool Looking Medals from UVU. Look how shiny they are!"
        rootClassName="rootClassName"
        image_src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Fheraldextra.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2Fa%2Fc9%2Fac924edc-bc26-5a71-8ac0-fbe1f8b1f44c%2F60f8f3d379d7f.image.png%3Fresize%3D400%252C219&f=1&nofb=1"
      ></NewsEventTile>
      <NewsEventTile
        text="Read Full Article"
        text1="Group of students walking past the UVU sign. Wow so amazing! Construction too."
        rootClassName="rootClassName"
        image_src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200827155028-02-college-campus-social-distancing-utah-valley-university-live-video.jpg&f=1&nofb=1"
      ></NewsEventTile>
      
      <WhiteCardTextBtn></WhiteCardTextBtn>
      <GreenTitleWhiteCard rootClassName="rootClassName"></GreenTitleWhiteCard>
      
      <GreenMidArea></GreenMidArea>
    </div>
  )
}

export default Home
