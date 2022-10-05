import {createContext} from 'react'
export type AirlineContext={
    AirlineDat
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)