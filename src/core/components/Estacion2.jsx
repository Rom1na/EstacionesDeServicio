import React from 'react'
import '../css/Estacion2.css'

const Estacion2 = ({empresabandera, empresa,direccion,localidad,url,combustibles,fecha}) => {
  return (

    <>
    <div className='contenedor'>
        <div className='card2'>
            <div className='content2'>
            
            <h2>{empresabandera}</h2>
              <h6>{empresa}</h6>
              
              
              <p className='texto1'> {direccion} - {localidad} </p>
              {combustibles.map((comb)=>
                   <div style={{
                    display: "flex",
                    flexDirection: "column",
                   
                  }}>
                   <ul
                   style={{
                      listStyleType: "none",
                      textAlign: "center",
                   }}>
                     <li className='description'>{comb.producto} - ${comb.precio}</li>
                   </ul>  
                   </div>
                   )
              } 
             
              <p className='texto1'>Fecha de actualización: {fecha.slice(0,9).split('-').reverse().join('-')}</p>
              <a href={url} className="card-link">Ver ubicación un GoogleMaps</a>

    


            </div> 
        </div>
        <div className='footer'>

            <button>ClickMe</button>

        </div>
    </div>
    </>
     
  )
}

export default Estacion2