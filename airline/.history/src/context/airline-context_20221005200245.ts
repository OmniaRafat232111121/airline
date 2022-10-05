import {createContext} from 'react'
import { AirlineData } from '../api/airline'
export type AirlineContext={
    AirineData=AirlineData[],
    
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)