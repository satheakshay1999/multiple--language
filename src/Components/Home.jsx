import React,{useState, useEffect} from 'react'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import Option from './Option';


const Home = () => {
  const {t} = useTranslation();

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const handleChnage = (e) =>{
    i18next.changeLanguage(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <>
    <section className="vh-100" style={{backgroundColor: "#2779e2"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-9">


        <div className="card" style={{borderRadius: "15px"}}>
          <div className="card-body">

          
          <div className="row align-items-center py-3">
            <div className="col-md-3 ps-5">
              <h6 className="mb-0">{t(`Fullname`)}</h6>
            </div>
            <div className="col-md-9 pe-5">
              <input
                type="text"
                className="form-control form-control-lg"
               
              />
            </div>
          </div>
    
            <hr className="mx-n3" />

            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">{t('Email')}</h6>

              </div>
              <div className="col-md-9 pe-5">

                <input type="email" className="form-control form-control-lg" placeholder="example@example.com" />

              </div>
            </div>

            <hr className="mx-n3" />

            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">{t('Address')}</h6>

              </div>
              <div className="col-md-9 pe-5">

                <textarea className="form-control" rows="3"></textarea>

              </div>
            </div>

            <hr className="mx-n3" />

        


            <div className="px-5 py-4 w-100">
              <button type="submit" className="btn btn-dark shadow btn-md w-100">{t('submit')}</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Home
