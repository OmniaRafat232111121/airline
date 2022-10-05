import {createContext} from 'react'
import { AirlineData } from '../api/airline';

export type AirlineContext = {
  AirlineData: AirlineData[],

}
const contextDefaultValue:AirlineContext={
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)