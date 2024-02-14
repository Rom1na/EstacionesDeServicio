import React from 'react'
import '../css/Inicio.css'
import { GiGasPump } from "react-icons/gi";



const Inicio = ({t}) => {

   
   



  return (
    <div className='contenedor'>
    <div className='content'>
      <p>Este proyecto permite buscar estaciones de Servicio en
         las Republica Argentina y consultar el precio de sus productos.
     </p>
    <p> La información es aportada y mantenida por el programa de datos abiertos del ministerio de Energía.</p> 
    <p> Si bien la misma no siempre es precisa (algunos precios pueden estar desactualizados y hay listadas estaciones que ya no existen) , </p> 
    <p> la información es de utilidad</p>
    <p> En la barra de navegación se encuentran la opciones de búsqueda:Por provincia o por dirección.Haga click en alguna de ellas para comenzar     </p>
    <GiGasPump 
     fontSize= '55px'
    />
     
    </div>
    </div>
  )
}

export default Inicio