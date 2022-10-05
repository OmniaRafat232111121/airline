import {createContext} from 'react'
export type AirlineContext={
    Air
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)