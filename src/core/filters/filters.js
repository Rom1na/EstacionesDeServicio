export const crearEstaciones = (data) => {

    const estaciones = data.result.records.reduce((arr, emp) => {
      const existingObject = arr.find((item) => item.idempresa === emp.idempresa);
    
      if (existingObject) {
        // Si el objeto ya existe en el array, agrega producto y precio a ese objeto
        existingObject.productos.push({ producto: emp.producto, precio: emp.precio });
      } else {
        // Si no existe, crea un nuevo objeto
        const newObject = {
          idempresa: emp.idempresa,
          empresa: emp.empresa,
          empresabandera: emp.empresabandera,
          direccion: emp.direccion,
          localidad: emp.localidad,
          latitud: emp.latitud,
          longitud: emp.longitud,
          fecha_vigencia: emp.fecha_vigencia,
          orden : 0,
          url : `https://maps.google.com?q=${emp.latitud},${emp.longitud}`,
          urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${emp.longitud},${emp.latitud}&layer=mapquest&marker=${emp.latitud},${emp.longitud}`,
          productos: [{ producto: emp.producto, precio: emp.precio }],
        };
    
        // Agrega el nuevo objeto al array
        arr.push(newObject);
      }
    
      return arr;
    }, []);
    

 //   setEstaciones(estaciones)                       
    console.log("comb",data.result.records);    
    console.log("comb2",estaciones);
    return estaciones;
   
   /* 
    console.log("comb3",estaciones[0].productos[0].producto);
    console.log("comb5",estaciones[0].productos[0].precio);
    console.log("comb4",estaciones[0].fecha_vigencia);
  */
  }  


   export const crearProvincias = (data) =>{
    const provinciasData = data.result.records.map((record) => ({
      provincia: record.provincia,
      
    })); 
      
            
     return provinciasData; 
    
    };  
  
   export const crearLocalidades = (data) =>{
   
     const localidadesData = data.result.records.map((record)=>({
      localidad: record.localidad,
     }));
     
     
     return localidadesData;


   };


  export const crearDirecciones = (data) => {

      const direcciones = data.direcciones.map((direccion)=>({
        nomenclatura : direccion.nomenclatura,
        lat: direccion.ubicacion.lat,
        lon: direccion.ubicacion.lon,
        url : `https://maps.google.com?q=${direccion.ubicacion.lat},${direccion.ubicacion.lon}`,
        urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${direccion.ubicacion.lon},${direccion.ubicacion.lat}&layer=mapquest&marker=${direccion.ubicacion.lat},${direccion.ubicacion.lon}`,
        

      }));

      
      return direcciones; 



  };

  