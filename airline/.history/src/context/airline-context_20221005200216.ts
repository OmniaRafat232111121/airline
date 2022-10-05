import {createContext} from 'react'
export type AirlineContext={
    AirlineData=AirlineData[],
    applFilter
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)