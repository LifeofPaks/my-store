import React from 'react'
import './Footer.scss'
import Payment from '../../assets/images/payment.png'
import Logo from '../../assets/images/logo.png'
import Send from '../../assets/images/send.png'
import Facebook from '../../assets/images/icons8-facebook-50.png'
import Twitter from '../../assets/images/icons8-twitter-50.png'
import Instagram from '../../assets/images/icons8-instagram-old-50.png'
import Youtube from '../../assets/images/icons8-youtube-50.png'
import GooglePlus from '../../assets/images/icons8-google-plus-50.png'
import Pinterest from '../../assets/images/icons8-pinterest-50.png'
import Googleplay from '../../assets/images/Googleplay.png'
import AppStore from '../../assets/images/AppStore.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="top">
        <div className="col col1">
          <h2 className="title">Products</h2>
          <a href='#'>PS5 </a>
          <a href='#'>PS VR2 </a>
          <a href='#'>PS Plus </a>
          <a href='#'>Games </a>
          <a href='#'>iPhone</a>
          <a href='#'>MacBook</a>
          <a href='#'>Apple Watch</a>
          <a href='#'>Other accessories</a>
        </div>

        <div className="col col2">
          <h2 className="title">Help</h2>
            <a href='#'>Delivery </a>
            <a href='#'>Returns </a>
            <a href='#'>Secure Payment </a>
            <a href='#'>Track an order </a>
            <a href='#'>Contact us</a>
        </div>

        <div className="col col3">
          <h2 className="title">About</h2>
              <a href='#'>Careers </a>
              <a href='#'>Terms & Conditions of Sales </a>
              <a href='#'>Secure Payment </a>
              <a href='#'>Private Policy </a>
              <a href='#'>Responsibility</a>
          </div>

          <div className="col">
            <div className="followUS">
              <h2>Connect</h2>
              <div className="wrapper">
                <img src={Facebook} alt="socials" />
                <img src={Twitter} alt="socials" />
                <img src={Instagram} alt="socials" />
                <img src={Youtube} alt="socials" />
                <img src={GooglePlus} alt="socials" />
                <img src={Pinterest} alt="socials" />
              </div>
              <div className="download">
                <img src={Googleplay} alt="download" />
                <img src={AppStore} alt="download" />
              </div>
          </div>
          
          </div>

        <div className="col col4">
          <div className="newsletter">
              <h2 className="title">Newsletter subscription</h2>
              <p>Recieve products news and update in your inbox</p>

              <div className="inputWrapper">
                <div className="input">
                  <input type="text" placeholder='Email address' />
                  <button>
                    <img src={Send} alt="send" />
                  </button>
                </div>

                <div className="terms">
                  <input type="checkbox" />
                  <p>I've read and accept Paks Everything's <a href='#'>Privacy Policy</a></p>
                </div>
              </div>

          </div>

        </div>
      </div>

      <div className="bottom">
        <div className="center logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
              <h1>
                PAKS <span>Everything</span>
              </h1>
            </Link>
          </div>

          <div className="payment">
            <img src={Payment} alt="payment" />
          </div>
      </div>
      <p className="copyright">&copy;2023 Paks Everything</p>
    </div>
  )
}

export default Footer