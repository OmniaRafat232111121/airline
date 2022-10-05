import React, { useState, useEffect } from 'react';
import { AirlineData, Api } from './api/airline';
import { AirlineAppContext } from './context/airline-context';
export const App = () => {
  const [airline, setAirline] = useState<AirlineData[]>([])
  const [filterAirline, setFilterAirline] = useState<AirlineData[]>([])

  const getAirLineData = async () => {
    const data = await Api.getAll();
    setAirline(data);

  }
  useEffect(() => {
    getAirLineData();
  }, [])

  

  return (
    <AirlineAppContext.Provider value={{
      AirlineData: filterAirline,
      applyFilter: applyFilter
    }}>
  
    </AirlineAppContext.Provider>

  )
}