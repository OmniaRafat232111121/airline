import {createContext} from 'react'
export type AirlineContext={
    AirlineData=AirlineData[],
    app
    
}
export const AirlineAppContext=createContext<AirlineContext>(ContextDefaultValue)