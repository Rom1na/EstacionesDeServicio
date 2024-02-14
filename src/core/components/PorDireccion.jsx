import React, { useEffect } from 'react'
import '../css/PorDirecion.css'
import { useState } from 'react'
import { useDContext } from '../Context/Cntxt'
import { traerResultado} from '../services/geo'
import {fechProvincias} from '../services/fechDataAx';
import DireccionCard from './DireccionCard'
import { SlLocationPin } from "react-icons/sl";

const PorDireccion = () => {
const{estaciones,provincias,setProvincias,setEstaciones} = useDContext();
const[direcciones, setDirecciones]= useState([]);
const [direccionSelect,setDireccionSelect] = useState ('Ubicación');



 const [form,setForm] = useState({
   calle:"",
   altura:"",
   localidad:"",
   provincia:"",
 });
  

 useEffect(()=>{
   fechProvincias(setProvincias); 




 },[]);



 const handleChange=(e)=>{
  const name = e.target.name;
  const value = e.target.value;

   setForm({
   ...form,
  [name]: value,

   });

 }





  return (
    <div className="contenedor"> 
        <form className="form">
    <div className="header">Ingrese una dirección</div>
    <br></br>
    <div className="inputs">
        <input
         name="calle"
         value={form.calle}
         onChange={handleChange}
         placeholder="Calle" 
         className="input" 
         type="text"/>
        <input 
        name="altura"
        value={form.altura}
        onChange={handleChange}
        placeholder="Altura" 
        className="input"
         type="text"/>
        <input
         name="localidad"
         value={form.localidad}
         onChange={handleChange}
         placeholder="Localidad" 
         className="input" 
         type="text"/>

        <select onChange= {handleChange}
            name="provincia"
            className="input"
             >
          <option selected>Seleccione Provincia</option>     
          {
              provincias?.map((provincia)=>(
                <option key={provincia.provincia} value={provincia.provincia}>
                 {provincia.provincia} 
                </option>
              ))
            }
        
        </select>





        
      </div>    
    <br></br>
    <button className="sigin-btn" type='button'
     onClick={()=>traerResultado(form.calle,form.altura,form.localidad,form.provincia,setDirecciones,setDireccionSelect,setEstaciones)}>Consultar</button> 

     </form>

    
        

     


     {  direcciones?.map((dir)=>

           


<DireccionCard

direccion={dir.nomenclatura}
url = {dir.url}
urlOSM={dir.urlOSM}  
lat={dir.lat}
lon={dir.lon}
p={form.provincia}
setForm={setForm}
setDireSelect={setDireccionSelect}


/>
  

) 
}



<h5>{direccionSelect} <SlLocationPin color='red' fontSize="20px" /></h5>

    </div>
  )
}

export default PorDireccion