import {createContext} from 'react'
export type AirlineContext={
    AirlineData=AirlineData[],
    
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)