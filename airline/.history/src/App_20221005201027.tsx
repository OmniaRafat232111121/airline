import React from "react";
import { AirlineAppContext } from "./context/airline-context";
function App() {
  return (
    <div>
<AirlineAppContext.Provider value={{
    AirlineData: filterAirlineDa,
    fetchAirlineData:()=>null,
    applyFilter: applyFilter
}}>

</AirlineAppContext.Provider>
    </div>
  );
}

export default App;
