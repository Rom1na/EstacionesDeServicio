import React from 'react'
import '../css/Navbar.css'
import { useDContext } from '../Context/Cntxt';


const Navbar = ({display,setDisplay}) => {

  const {estaciones,setEstaciones,value,setValue,coma,setComa} = useDContext();


  const clickHandlerL = ()=>{
        
    setDisplay({direccion:false,inicio: false,localidad: true});
    setEstaciones([]);
    const navCheck = document.getElementById('nav-check');
    navCheck.checked = false;


  }


  const clickHandlerD = ()=>{
        
    setDisplay({localidad: false,inicio: false,direccion: true});
    setEstaciones([]);
    setComa("");
    setValue({
      prov: "Ubicación ",
      loc : " "
    })

    const navCheck = document.getElementById('nav-check');
    navCheck.checked = false;

  }






  return (
    <div class="nav">
    <input type="checkbox" id="nav-check"/>
    <div class="nav-header">
      <div class="nav-title">       
     <p>Estaciones de Servicio en Argentina</p>
     
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div class="nav-links">
    
      
      <p className='cl' onClick={clickHandlerL}>Por Localidad</p>
      <p className='cl' onClick={clickHandlerD}>por Dirección</p>
    </div>
  </div>
    
  )
}

export default Navbar