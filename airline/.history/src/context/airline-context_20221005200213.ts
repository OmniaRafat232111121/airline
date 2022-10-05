import {createContext} from 'react'
export type AirlineContext={
    AirlineData=AirlineData[],
    appl
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)