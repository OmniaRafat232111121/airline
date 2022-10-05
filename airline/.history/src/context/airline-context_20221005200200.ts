import {createContext} from 'react'
export type AirlineContext={
    AirlineData=AIir
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)