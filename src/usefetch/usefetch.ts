import { useState, useEffect } from "react";
import { SWPeople } from "../components/SWPeopleCard/SWPeopleCard";

const useFetch = (p0: string) => {
  const [data, setData] = useState<SWPeople | null >(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(()=>{
    const fetchData = async() =>{
      setloading(true);
      seterror(null);
      try {
        const respons = await fetch(url);
        if (!respons.ok){
          throw new error (`an error ocurred: ${respons.statusText}`);
          const jsonData = await respons.json();
          setData(jsonData);
        }
      }catch(error){
        seterror(error.message)
      }finally{
        setloading(false);
      }
    };
    fetchData();
  },[url]);

return {data, loading, error};
};

export default useFetch;


