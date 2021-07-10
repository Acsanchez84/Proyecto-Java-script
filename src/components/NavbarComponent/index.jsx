import React from 'react'
import './style.scss';
import CartWidged from "../CartwidgedComponent";
import {Nav, NavDropdown, Button, FormControl, Form, NavBar} from 'react-bootstrap'
import imaagenes from "../../public/imagenes/carrito.jpg"


function Navbar(){
    
    return(


<>
<nav className="contenedorPadre col-12">

<a href="index.html">
  
<img src="/logo.jpg" width="150px" /></a>

					<ul className="row">
			
						
						<ol className="barraNavegacion col-12 col-sm-4 col-md-2"><a href="contacto.html"> Contacto </a>  </ol>

						<ol className="barraNavegacion col-12 col-sm-4 col-md-2"><a href="Portafolio.html"> Portafolio </a> </ol>
				
						<ol className="barraNavegacion col-12 col-sm-4-6 col-md-2"> <a href="Quienessomos.html"> Quienes Somos </a></ol>
			
						<ol className="barraNavegacion col-12 col-sm-4 col-md-2" ><a href="regalos.html"> Regalos </a> </ol>

						<ol className="barraNavegacion col-12 col-sm-4 col-md-2"> <a href="tendencias.html"> Tendencia </a> </ol>

                        <ol> <img src="imagenes/carrito.jpg 0.5px"/> </ol>
            
				</ul>
	
				</nav>

                <h1 className="barraNavegacion col-12">  VICA FOR YOU </h1>
      
      
            <h2>Somos bolsos, moda y accesorios</h2>


                 <p>

  Existen un sin fín de blogs sobre moda y tendencias, pero… ¿qué hay de los accesorios, de esos grandes aliados que pueden marcar la diferencia en nuestros outfits y looks? Ellos también se merecen un espacio, por eso hemos querido hablar de algunos de los mejores accesorios como los bolsos, los cuales encuentras de todos los tamaños, estilos y colores!! Visita VICA marca colombiana especializada en la fabricación de bolsos que embellecen y empoderan a la mujer moderna sin dejar de lado a nuestro pùblico masculino gran protagonista de nuestra historia.
                </p>
  
                </>
    );
  }
  


  
  
  

    export default Navbar; 
  
