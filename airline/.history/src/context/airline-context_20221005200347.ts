import {createContext} from 'react'
import { AirlineData } from '../api/airline';

export type AirlineContext = {
  AirlineData: AirlineData[],

}
const contextDefaultValue:Ai
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)