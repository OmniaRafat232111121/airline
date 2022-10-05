import {createContext} from 'react'
import { AirlineData } from '../api/airline';

export type AirlineContext = {
  AirlineData: AirlineData[],
  applyFilter:(type:string)=>vo

}
const contextDefaultValue:AirlineContext={
    AirlineData: []
}
export const AirlineAppContext=createContext<AirlineContext>(contextDefaultValue)