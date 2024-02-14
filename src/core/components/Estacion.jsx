import React from 'react'
import '../css/Estacion.css'


const Estacion = ({empresabandera, empresa,direccion,localidad,url,combustibles,fecha,urlOSM}) => {
    return (
      <div>
            <div className='card'
              
            >
  
            <div className='content'>
           
  
              <h2 className='titu'>{empresabandera}</h2>
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
             
              <p className='texto1'>Precios informados: {fecha.slice(0,10).split('-').reverse().join('-')}</p>
              
              <iframe 
               src={urlOSM}
               style={{
               width:'90%',
               height:'200px',
               frameBorder:"0",
               scrolling:"no",
               marginHeight:"0",
               marginWidth:"0" ,
               border: '1px solid black'}}>
             </iframe>
            <br />
            <br />
            <br />
            
            <a href={url} className="card-link">Abrir en GoogleMaps</a>



            </div>
            </div>
          </div>
  
  
  
  
  
  
  
      
    )
  }
  
  export default Estacion

