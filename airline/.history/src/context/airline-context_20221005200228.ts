import {createContext} from 'react'
imp
export type AirlineContext={
    AirlineData=AirlineData[],
    
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)