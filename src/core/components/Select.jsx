import React from 'react'
import { fechEstacionesPorLocalidad,fechProvincias,FechLocalidades } from '../services/fechDataAx';
import { useEffect,useState } from 'react';
import { useDContext } from '../Context/Cntxt';
import { SlLocationPin } from "react-icons/sl";
import { ordenarObjetoPorCercania, traerResultado } from '../services/geo'; 


const Select = () => {
      
    const {estaciones,provincias,localidades,coma,value,setEstaciones,setProvincias,setLocalidades,setComa,setValue} = useDContext();
    
    
    
    useEffect(()=>{

     
        fechProvincias(setProvincias);
        
       // console.log ("p",provincias);
       // console.log ('l',localidades);
       
       
        
       
         
   
   
   
        },[]);





    function manejarSelect(e){
        const p = e.target.value;
        setValue({...value, prov :p});
        FechLocalidades(p,setLocalidades);
    
    }

    function manejarSelect2(e){
     const l = e.target.value;
     setValue({...value, loc :l});
     setComa(",");
     fechEstacionesPorLocalidad(l,value.prov,setEstaciones)

   
     
    }




  return (


    <>
    <div>
    

    

    <h5>{value.loc} {coma} {value.prov} <SlLocationPin color='red' fontSize="20px" /></h5>
        
       
        <select onChange= {manejarSelect} >
          <option selected>Seleccione Provincia</option>     
          {
              provincias?.map((provincia)=>(
                <option key={provincia.provincia} value={provincia.provincia}>
                 {provincia.provincia} 
                </option>
              ))
            }
        
        </select>
        

        <select onChange={manejarSelect2}>
          <option selected>Seleccione Localidad</option>     
          {
              localidades?.map((loc)=>(
                <option key={loc.localidad} value={loc.localidad}>
                 {loc.localidad} 
                </option>
              ))
            }
        
        </select>


        </div>

        </>

       


    
  )
}

export default Select