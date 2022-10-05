import {createContext} from 'react'
export type AirlineContext={
    Airline
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)