import { cBase } from "./cBase";
import { crearEstaciones, crearLocalidades, crearProvincias } from "../filters/filters";
import { ordenarObjetoPorCercania } from "./geo";



export const fechDataAx = async() =>{
     const {data} = await cBase.get();
      console.log ('llamada',data);
      crearEstaciones(data);
     //const resultados = filter(data);
     //console.log( 're',resultados);
//setData(resultados);

};



export const fechEstacionesPorLocalidad= async(l,p,setData)=>{
    
     const consulta =`datastore_search?resource_id=80ac25de-a44a-4445-9215-090cf55cfda5&filters={%22provincia%22:%22${p}%22,%22localidad%22:%22${l}%22,%22tipohorario%22:%22Diurno%22}&fields=idproducto,producto,precio,idempresa,fecha_vigencia,idempresa,empresa,empresabandera,direccion,localidad,latitud,longitud&sort=idempresa,producto&limit=1000`;
     console.log ('consulta',consulta);
     const {data} = await cBase.get(consulta);
    // console.log ('llamada',data.result.records);
     const estaciones = crearEstaciones(data);
     console.log ('est',estaciones);
    // ordenarObjetoPorCercania (estaciones,-34.704635681250736,-58.29541636386447)    

     setData(estaciones);


     
};


export const fechEstacionesEucle= async(lat,lon,p,setData,setForm,setDireccionSelect,direSel)=>{
    
     const consulta =`datastore_search?resource_id=80ac25de-a44a-4445-9215-090cf55cfda5&filters={%22provincia%22:%22${p}%22,%22tipohorario%22:%22Diurno%22}&fields=idproducto,producto,precio,idempresa,fecha_vigencia,idempresa,empresa,empresabandera,direccion,localidad,latitud,longitud&sort=idempresa,producto&limit=10000`;
     console.log ('consulta',consulta);
     const {data} = await cBase.get(consulta);
     console.log ('llamada',data.result.records);
     const estaciones = crearEstaciones(data);
     console.log ('est',estaciones);
     ordenarObjetoPorCercania (estaciones,lat,lon,setData)    
     setForm({calle:"",
     altura:"",
     localidad:"",
     provincia:"",}) 
     setDireccionSelect(direSel);
     


     
};













export const  fechProvincias = async(setData) =>{

     const {data} = await cBase.get("http://datos.energia.gob.ar/api/3/action/datastore_search?resource_id=80ac25de-a44a-4445-9215-090cf55cfda5&fields=provincia&distinct=true&sort=provincia");
     const provincias = crearProvincias(data);
     setData(provincias);
     

};


export const FechLocalidades = async (p,setData) =>{
     
    const {data} = await cBase.get(`http://datos.energia.gob.ar/api/3/action/datastore_search?resource_id=80ac25de-a44a-4445-9215-090cf55cfda5&filters={%22provincia%22:%22${p}%22,%22tipohorario%22:%22Diurno%22}&fields=localidad&distinct=true&sort=localidad&limit=1000`);
    const localidades = crearLocalidades (data);
    setData(localidades);

};







export const fechDataAxId = async(ep,filter,setData,id) =>{
     const urlcompuesta = ep+id;
     const {data} = await cBase.get(urlcompuesta);
   //  console.log ('llamada',data);
     const resultados = filter(data);
   //  console.log( 're',resultados);
     setData (resultados);

};


export const fechDataAxDatos = async(ep,filter,setData,id,dato) =>{
     const urlcompuesta = ep+id+'/'+dato;
     const {data} = await cBase.get(urlcompuesta);
     console.log ('llamada',data);
     const resultados = filter(data);
     console.log( 're',resultados);
     setData (resultados);

};


export const fechDataAxCast = async(ep,filter,setData,id) =>{
     
     const urlcompuesta = ep+id+'/credits';
     const {data} = await cBase.get(urlcompuesta);
     const resultados = filter(data.cast);
     setData (resultados);

};