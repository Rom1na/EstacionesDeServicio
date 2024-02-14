import React from 'react'
import Estacion from './Estacion'
import { useDContext } from '../Context/Cntxt';

const ContFlex = () => {

  const {estaciones} = useDContext();

  

  return (
    <section
     style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'center'
          
          
       }}  
    >
      
      
      {  estaciones?.map((est)=>

           

                   
                   <Estacion
                   key={est.idempresa}
                   empresabandera = {est.empresabandera}
                   empresa = {est.empresa}
                   direccion = {est.direccion}
                   localidad ={est.localidad}
                   url = {est.url}
                   urlOSM={est.urlOSM}  
                   combustibles={est.productos}
                   fecha={est.fecha_vigencia}
                   
                   />
                     
       
               ) 
               }




      




    </section>
  )
}

export default ContFlex