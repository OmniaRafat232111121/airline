import React from "react";
import { AirlineAppContext } from "./context/airline-context";
impor
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