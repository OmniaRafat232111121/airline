import React from "react";
import { AirlineAppContext } from "./context/airline-context";
function App() {
  return (
    <div>
<AirlineAppContext.Provider value={
  air
}>
{children}
</AirlineAppContext.Provider>
    </div>
  );
}

export default App;
