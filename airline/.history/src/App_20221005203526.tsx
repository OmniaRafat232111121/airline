import React,{useState,useEffect} from "react";
import { AirlineAppContext } from "./context/airline-context";
import {AirlineData,Api} from "./api/airline"
function App() {
  const [airline, setAirline] = useState<AirlineData[]>([])
  const [filterAirline, setFilterAirline] = useState<[]>([])
  const App=()=>{
    const getAirLineData=async()=>{
      const data=Api.getAll()
      se(data)
    }
    useEffect(()=>{
      getAirLineData();
    },[])
  }
  return (
    <div>
<AirlineAppContext.Provider value={{
    AirlineData: filterAirlineData,
    fetchAirlineData:()=>null,
    applyFilter: applyFilter
}}>

</AirlineAppContext.Provider>
    </div>
  );
}

export default App;
