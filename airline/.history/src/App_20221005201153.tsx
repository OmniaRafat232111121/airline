import React from "react";
import { AirlineAppContext } from "./context/airline-context";
import {AirlineData,Api} from "./a"
function App() {
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
