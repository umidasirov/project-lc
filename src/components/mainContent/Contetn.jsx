import React from 'react'
import Button from '../other/Button'
import { Link } from 'react-router-dom'
export default function Contetn() {
  return (
    <div className='container-all main-title' data-aos="fade-up" data-aos-duration="30000">
        <div className="content-title">
            <p>SPECIAL DEAL FOR USERS</p>
            <h1>Enjoy over <span className='blue'>1,2K courses</span> for creatives for <span className="green">free</span></h1>
            <Button title='Explore Course Packages' link="/login"/>
        </div>
        <img src="https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/banner-learning.png" alt="" className="main-img" />
    </div>
  )
}
