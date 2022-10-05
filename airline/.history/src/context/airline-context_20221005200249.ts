import {createContext} from 'react'
import { AirlineData } from '../api/airline'
export type AirlineContext={
    AirLineData=AirLineData[],
    
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)