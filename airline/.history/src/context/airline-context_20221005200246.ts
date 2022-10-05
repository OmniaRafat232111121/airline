import {createContext} from 'react'
import { AirlineData } from '../api/airline'
export type AirlineContext={
    AirLineData=AirlineData[],
    
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)