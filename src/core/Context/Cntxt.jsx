import { createContext,useContext,useState } from "react";
export const DContext = createContext();


export const ContextoProveedor =({children}) =>{

    const[estaciones,setEstaciones] = useState([]);
    const [provincias,setProvincias] = useState([]);
    const [localidades,setLocalidades] = useState([]);
    const [coma, setComa] = useState("");
    const [value,setValue] = useState({
      prov: "Ubicación ",
      loc : " "
    });  

    


   return(
     <DContext.Provider
        value ={{
         estaciones,
         provincias,
         localidades,
         coma,
         value,
         
         setEstaciones,
         setProvincias,
         setLocalidades,
         setComa,
         setValue,
          


        }}
     >
      {children}  

     </DContext.Provider>
   );


};


  export const  useDContext =() =>{
          
      const {estaciones,provincias,localidades,coma,value,setEstaciones,setProvincias,setLocalidades,setComa,setValue} = useContext(DContext);


      return{
          estaciones,
          provincias,
          localidades,
          coma,
          value,
          setEstaciones,
          setProvincias,
          setLocalidades,
          setComa,
          setValue,
          
         }

  };







