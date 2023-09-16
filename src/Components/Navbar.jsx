import React from 'react'
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import i18next from "i18next"
import Option from './Option';

const Navbar = () => {
  const {t} = useTranslation();
  const handleChnage = (e) =>{

    i18next.changeLanguage(e.target.value)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid container">
          <Link className="navbar-brand text-white" to="/">LOGO</Link>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white" style={{color: "#ffff"}}></span>
          </button>
          <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link text-white" aria-current="page" href="#" >{t('home')}</Link>
            </li>
              
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white" href="#">{t('About')}</Link>
              </li>
            
            </ul>
            
          </div>
          <div>
            <Option onChange={(e)=>handleChnage(e)} />
          </div>
        </div>
</nav>      
    </>
  )
}

export default Navbar
