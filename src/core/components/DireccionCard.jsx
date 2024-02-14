import React from 'react'
import'../css/DireccionCard.css'
import { useDContext } from '../Context/Cntxt';
import { fechEstacionesEucle } from '../services/fechDataAx';



const DireccionCard = ({direccion,url,urlOSM,lat,lon,p,setForm,setDireSelect}) => {

    const {estaciones,setEstaciones} = useDContext(); 


    return (
    <div>
    <div className='card' >

    <div className='content2'>
   

      
      
      
      <p className='texto1'> {direccion} </p>
      
     
  
      
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
    
<div>


    <a style={{
        margin:'20px'}}
    href={url} className="card-link">Abrir en GoogleMaps</a>

    <button
    style={{
        margin:'20px'
    }}
    onClick={()=>fechEstacionesEucle(lat,lon,p,setEstaciones,setForm,setDireSelect,direccion)}
    
    >Elegir esta dirección</button>  
 </div>

    </div>
    
    </div>
  </div>
  )
}

export default DireccionCard