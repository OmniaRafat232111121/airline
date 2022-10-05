import {createContext} from 'react'
import
export type AirlineContext={
    AirlineData=AirlineData[],
    
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)