import {createContext} from 'react'
export type AirlineContext={
    AirlineData=AirlineData[],
    applFil
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)