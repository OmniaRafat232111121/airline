import {createContext} from 'react'
import { AirlineData } from '../api/airline'
export type AirlineContext={
    AirLineData=AirineData[],
    
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)