import React,{useS} from "react";
import { AirlineAppContext } from "./context/airline-context";
import {AirlineData,Api} from "./api/airline"
function App() {
  const [airline, setAirline] = useState<AirlineData[]>([])
  const [filterAirline, setFilterAirline] = useState<AirlineData[]>([])

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
