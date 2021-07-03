import React from 'react'

// Segundo Desafio crear barra de navegacion//

export const NavBar = ({cart}) => {
    return (
<>
      <nav className="contenedorPadre col-12">

<a href="index.html">
  
<img src="/logo.jpg" width="150px" /></a>

					<ul className="row">
			
						
						<ol className="barraNavegacion col-12 col-sm-4 col-md-2"><a href="contacto.html"> CONTACTO </a>  </ol>

						<ol className="barraNavegacion col-12 col-sm-4 col-md-2"><a href="Portafolio.html"> PORTAFOLIO </a> </ol>
				
						<ol className="barraNavegacion col-12 col-sm-4-6 col-md-2"> <a href="Quienessomos.html"> QUIENES SOMOS </a></ol>
			
						<ol className="barraNavegacion col-12 col-sm-4 col-md-2" ><a href="regalos.html"> REGALOS </a> </ol>

						<ol className="barraNavegacion col-12 col-sm-4 col-md-2"> <a href="tendencias.html"> TENDENCIA </a> </ol>

            <ol className="barraNavegacion col-12 col-sm-4 col-md-2"> <a href="Carrito.html"> CARRITO = {cart.length} </a> </ol>
            
					</ul>
	
				</nav>
        <h1 className="barraNavegacion col-12">  Somos bolsos, moda y accesorios </h1>

      <p>

  Existen un sin fín de blogs sobre moda y tendencias, pero… ¿qué hay de los accesorios, de esos grandes aliados que pueden marcar la diferencia en nuestros outfits y looks? Ellos también se merecen un espacio, por eso hemos querido hablar de algunos de los mejores accesorios como los bolsos, los cuales encuentras de todos los tamaños, estilos y colores!! Visita VICA marca colombiana especializada en la fabricación de bolsos que embellecen y empoderan a la mujer moderna sin dejar de lado a nuestro pùblico masculino gran protagonista de nuestra historia.
    </p>
  
        </>
    );
  }
  


  
  function footer() {
    return (
     
    
<footer class="section-footer bg-white">
  <div class="container">
      <section class="footer-top padding-y-lg text-black">
          <div class="row">
              <aside class="col-md col-6">
                  <h6 class="title">Modelos</h6>
                  <ul class="list-unstyled">
                      <li> <a href="#">Bolsos y Morrales para Mujer</a></li>
                      <li> <a href="#">Bolsos y Morrales para Hombre</a></li>
                      <li> <a href="#">Moda para Niños</a></li>
                      <li> <a href="#">Accesorios</a></li>
                  </ul>
              </aside>
              <aside class="col-md col-6">
                  <h6 class="title">Nosotros</h6>
                  <ul class="list-unstyled">
                      <li> <a href="#"> Historia</a></li>
                      <li> <a href="#">Preguntas Frecuentes</a></li>
                      <li> <a href="#">Beneficios de Nuestros Productos</a></li>
                  </ul>
              </aside>
              <aside class="col-md col-6">
                  <h6 class="title">Ayuda</h6>
                  <ul class="list-unstyled">
                      <li> <a href="#">Contactanos</a></li>
                    
                     
                  </ul>
              </aside>
              <aside class="col-md col-6">
                  <h6 class="title">Account</h6>
                  <ul class="list-unstyled">
                      <li> <a href="#"> User Login </a></li>
                      <li> <a href="#"> User register </a></li>
                     
                  </ul>
              </aside>
              <aside class="col-md">
                  <h6 class="title">Social</h6>
                  <ul class="list-unstyled">
                      <a href="https://wa.link/fpser7"><img src="imagenes/whatsapp.jpg"/> alt= "Whatsapp" 2px </a>
                      <a href="https://www.instagram.com/vicaforyou_/"> <img src="imagenes/instagram1.jpg"/> alt="Instagram" 2px </a>
                  </ul>
              </aside>
          </div> 
      </section>  
  
      <section class="footer-bottom text-center">
      
             
              <p class="text-muted"> &copy; 2021 Company name, All rights reserved </p>
              <br />
      </section>
  </div>
  </footer>
  

    );
  }
  

    export default NavBar; 
  
