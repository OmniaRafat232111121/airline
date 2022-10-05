import {createContext} from 'react'
import { AirlineData } from '../api/airline';

export type AirlineContext = {
  AirlineData: AirlineData[],

}
constcontextDefaultValue
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)