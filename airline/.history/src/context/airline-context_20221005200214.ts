import {createContext} from 'react'
export type AirlineContext={
    AirlineData=AirlineData[],
    applF
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)