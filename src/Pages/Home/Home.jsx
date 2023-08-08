import React from 'react'
import './Home.scss'
import Banner from '../../Components/Banner/Banner'
import Feature from '../../Components/Feature/Feature'
import AllCategories from '../../Components/AllCategories/AllCategories'

const Home = () => {
  return (
    <div className='home'>
      <Banner/>
      <Feature/>
      <AllCategories/>
    </div>
  )
}

export default Home