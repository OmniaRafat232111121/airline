import React from "react";
import { AirlineAppContext } from "./context/airline-context";
function App() {
  return (
    <div>
<AirlineAppContext.Provider value={
  airLin
}>
{children}
</AirlineAppContext.Provider>
    </div>
  );
}

export default App;
