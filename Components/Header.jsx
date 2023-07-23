import React from 'react'
import './index.css'
import logo from '../Images/logo.png'

const Header = () => {
  return (
    <div style={{backgroundColor:"#131313"}}>

      <nav className="navbar navbar-expand-lg " style={{fontSize:12}}>
        <img src={logo} style={{width:"200px", height:"40px", paddingLeft:"5%"}}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{marginLeft:'35%'}}>
            <a className="nav-item nav-link text-white" href="#">HOME</a>
            <a className="nav-item nav-link text-white" href="#">KNOW US</a>
            <a className="nav-item nav-link text-white" href="#">SERVICES</a>
            <a className="nav-item nav-link text-white" href="#">WORK</a>
            <a className="nav-item nav-link text-white" href="#">CLIENTS</a>
            <a className="nav-item nav-link text-white" href="#">DIGITAL MARKETING</a>
            <a className="nav-item nav-link text-white" href="#">SOCIAL MEDIA</a>
            <a className="nav-item nav-link text-white" href="#">FILMS</a>
            <a className="nav-item nav-link text-white" href="#">CAREERS</a>
            <a className="nav-item nav-link text-white" href="#">CONTACT</a>
            <a className="nav-item nav-link text-white" href="#">+91 9886833138</a>
          </div>
        </div>    
      </nav>

    </div>
  )
}

export default Header