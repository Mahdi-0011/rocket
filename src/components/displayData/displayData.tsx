
import useFetch from "../../usefetch/usefetch";

const DisPlayData = () =>{
  const {data, loading, error} = useFetch("https://swapi.dev/api/people/1")
  if (loading) return <p>loading...</p>
  if (error) return <p>Error: {error}</p>
return(
  <div>
    name:{data?.name}, height:{data?.height}, {data?.birth_year}
  </div>
);
};

export default DisPlayData;