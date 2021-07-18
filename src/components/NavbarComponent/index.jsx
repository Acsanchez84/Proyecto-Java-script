import React from 'react'
import './navbar.scss'
import logo from '../.././logo.jpg'
import {CartWidgetComponent} from '../CartWidgetComponent.jsx'
import {Link} from 'react-router-dom'


export function NavbarComponent () {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <div id = 'navbar' className="navbar-brand">
                <img src={logo} height="100px" alt="logo" />
                    <a >VICA FOR YOU</a>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-2">

                <ul className="navbar-nav">

                    <li className="nav-item"><span  id = 'txtnavbar'>Contacto</span></li>
                    <li className="nav-item"><span  id = 'txtnavbar'>Portafolio</span></li>
                    <li className="nav-item"><span  id = 'txtnavbar'>Quienes Somos</span></li>
                    <li className="nav-item"><span  id = 'txtnavbar'>Regalo</span></li>
                    <li className="nav-item"><span  id = 'txtnavbar'>Tendencia</span></li>
                   
                    
                </ul>
            </div>
                <CartWidgetComponent />

            </div>

        </nav>
    )

}