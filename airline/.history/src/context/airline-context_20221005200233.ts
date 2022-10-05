import {createContext} from 'react'
import {Air}
export type AirlineContext={
    AirlineData=AirlineData[],
    
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)