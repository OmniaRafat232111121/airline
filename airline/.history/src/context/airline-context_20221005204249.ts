import {createContext} from 'react'
import { AirlineData } from '../api/airline';

export type AirlineContext = {
  AirlineData: AirlineData[],
  applyFilter:(type:string)=>void

}
const contextDefaultValue:AirlineContext={
    AirlineData: []
    applyFilter:(typ)

}
export const AirlineAppContext=createContext<AirlineContext>(contextDefaultValue)