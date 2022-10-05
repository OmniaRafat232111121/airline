import {createContext} from 'react'
import { AirlineData } from '../api/airline';

export type AirlineContext = {
  AirlineData: AirlineData[],
  apply

}
const contextDefaultValue:AirlineContext={
    AirlineData: []
}
export const AirlineAppContext=createContext<AirlineContext>(contextDefaultValue)