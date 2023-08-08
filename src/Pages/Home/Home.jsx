import React, { useState, useEffect } from 'react'
import './Home.scss'
import Banner from '../../Components/Banner/Banner'
import Feature from '../../Components/Feature/Feature'
import AllCategories from '../../Components/AllCategories/AllCategories'

const Home = () => {

  const [showTopBtn, setShowBtn] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 400 ? setShowBtn(true) : setShowBtn(false)
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  return (
    <div className='home'>
      <Banner/>
      <Feature/>
      <AllCategories/>

    {/* SCROLL TOP BUTTON */}
    {
      showTopBtn && 
      <div className="topButton">
        <button onClick={scrollToTop}>
          <img src="https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-up-arrow-essential-phatplus-lineal-phatplus.png" alt="external-up-arrow-essential-phatplus-lineal-phatplus"/>
        </button>
      </div>
    }
      
    </div>
  )
}

export default Home