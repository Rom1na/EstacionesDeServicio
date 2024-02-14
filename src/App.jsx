import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { cBase } from './core/services/cBase';
import { FechLocalidades, fechDataAx,fechEstacionesPorLocalidad, fechProvincias } from './core/services/fechDataAx';
import Estacion from './core/components/Estacion';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import SwiperEst from './core/components/SwiperEst';
import Select from './core/components/Select';
import { ContextoProveedor, DContext } from './core/Context/Cntxt';
import Estacion2 from './core/components/Estacion2';
import ContFlex from './core/components/ContFlex';
import Navbar from './core/components/Navbar';
import Inicio from './core/components/Inicio';
import PorDireccion from './core/components/PorDireccion';


function App() {
   
  register();
   
  const [display,setDisplay]= useState({
       inicio: true,
       localidad: false,
       direccion:false
    })
   

   

  function  manejarSelectProv(e){
    const p = e.target.value;
    setValue({...value,prov :p});




  };
    
     
 /* 
  useEffect(()=>{

     fechEstacionesPorLocalidad('BERNAL',setEstaciones);
     
     
    
      



     },[]);
    
*/
  
  return ( 
    <>
    <div
     style={{
      display: 'flex',
      flexDirection: 'column',

     }}
    >
      
      
     <ContextoProveedor>
      <Navbar
       display={display}
       setDisplay={setDisplay}
      />
     
    
     
     {display.localidad && <Select />}
     {display.inicio && <Inicio />}
     {display.direccion&& <PorDireccion/>}
    
    <ContFlex/>

     
     </ContextoProveedor> 

     </div>   
     
    </>
  )
}

export default App


/*

 <div
     style={{
        display: "flex",
        flexDirection: "row",
        
        
      
       
      }}>
       
        
        {  estaciones.map((est)=>
           <Estacion
           key={est.idempresa}
           empresabandera = {est.empresabandera}
           empresa = {est.empresa}
           direccion = {est.direccion}
           localidad ={est.localidad}
           url = {est.url}  
           combustibles={est.productos}
           fecha={est.fecha_vigencia}
           
           />

         ) 
         }
        
      </div>
     

*/