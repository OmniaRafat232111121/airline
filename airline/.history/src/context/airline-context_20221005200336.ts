import {createContext} from 'react'
import { AirlineData } from '../api/airline';

export type AirlineContext = {
  AirlineData: AirlineData[],

}
const 
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)