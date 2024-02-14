import React, { useState } from 'react'
import Estacion from './Estacion'
import Estacion2 from './Estacion2'
import { useRef,useEffect } from 'react';
import { useDContext } from '../Context/Cntxt';



const SwiperEst = () => {

  const {estaciones,provincias,localidades,value,setEstaciones,setProvincias,setLocalidades,setValue} = useDContext();
   


    const swiperElRef = useRef(null);
    const [slidesPerView,setSlidesPerView] = useState (3)

    useEffect(() => {
      swiperElRef.current.addEventListener('swiperProgress', (e) => {
        // Lógica cuando cambia el progreso del swiper
      });
  
      swiperElRef.current.addEventListener('swiperSlideChange', (e) => {
        // Lógica cuando cambia el slide del swiper
      });

    

      if  (Object.keys(estaciones).length == 2){
           setSlidesPerView(2); }
           
      
      
      
      
      const reziseHandler= ()=>{

         if(window.innerWidth < 768){
          setSlidesPerView(1);

         } else if (window.innerWidth <992){
          setSlidesPerView(2);
         } else {
           setSlidesPerView(3);

         }

      


 
       };

       window.addEventListener("resize",reziseHandler);

       reziseHandler();
       return () =>{
         
         window.removeEventListener("resize",reziseHandler);

       };

  
    }, []);






  return (

    <>

    <swiper-container
    ref={swiperElRef}
    slides-per-view= {slidesPerView} 
    navigation="true" 
    pagination="true"
    space-between= "10"
    
    >


    
      
           

                
            
            {  estaciones?.map((est)=>
                
             <swiper-slide
                key={est.idempresa}>
                
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
              </swiper-slide>     
    
            ) 
            }

          



    </swiper-container>
    

    
    </>
  )
}

export default SwiperEst

