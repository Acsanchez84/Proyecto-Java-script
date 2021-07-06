import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useEffect, useState} from "react";
import './style.scss';

function Welcome(props) {
  return <h1>Bienvanido a Vica!!, {props.name}</h1>;
}

function productos () {
  return (
    <>
  <productos/>
  
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>



<div className="row">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Bolso amarillo</h5>
        <img src="imagenes/bolsoamarillo.jpg 2px"/>
        <p className="card-text">Bolso casual con cadena, perfecto para la oficina o tu dia a dia</p>
        <b>$65000</b>
        <a  className="btn btn-primary">Agregar</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Morral Morado</h5>
        <img src="imagenes/morralmorado.jpg 2px"/>
        <p className="card-text">Morral perfecto para el computador en material de facil limpieza y resistente.</p>
        <b>$120000</b>
        <a  className="btn btn-primary">Agregar</a>
     
        
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Canguros</h5>
        <img src="imagenes/canguroamarillo.jpg 2px"/>
        <p className="card-text">El accesorio perfecto para completar tu outfit y lo puedes usar para guardar llaves y celular.</p>
        <b>$55000</b>
        <a  className="btn btn-primary">Agregar</a>
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Vica Kids</h5>
        <img src="imagenes/vicakids.jpg 2px"/>
        <p className="card-text">Maletas y morrales para niños en material de trafico pesado.</p>
        <b>$70000</b>
        <a  className="btn btn-primary">Agregar</a>
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Bolso Hombre</h5>
        <p className="card-text">Bolso terciado en color negro y cafe.</p>
        <img src="imagenes/hombre.jpg 2px"/>
        <b>$60000</b>
        <a  className="btn btn-primary">Agregar</a>        
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Monederos</h5>
        <img src="imagenes/monederos.jpg 2px"/>
        <p className="card-text">Accesorio adecuado en combo o en unidad que puedes utilizar con tus bolsos o morrales.</p>
        <b>$30000</b>
        <a  className="btn btn-primary">Agregar</a>        
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Portacelular</h5>
        <img src="imagenes/portacelular.jpg 2px"/>
        <p className="card-text">Cuando quieras tener seguro tu celular y dinero con un diseño moderno y a la vanguardia.</p>
        <b>$35000</b>
        <a  className="btn btn-primary">Agregar</a>        
      </div>
    </div>
  </div>


  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Morral regreso a clase</h5>
        <img src="imagenes/morral.jpg 2px"/>
        <p className="card-text">Morral moderno en cuero sintetico que permite guardar tus objetos para el regreso a clase.</p>
        <b>$110000</b>
        <a  className="btn btn-primary">Agregar</a>        
      </div>
    </div>
  </div>
  
</div>

</>
);

}

export default app;
