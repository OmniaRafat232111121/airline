import {createContext} from 'react'
export type AirlineContext={
    AirlineData=AirlineData[],
    a
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)