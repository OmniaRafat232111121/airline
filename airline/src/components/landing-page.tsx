import React, {FunctionComponent , useContext} from 'react';
import { AirlineAppContext } from '../context/airline-context';


const LandingPage: FunctionComponent <{}>  = () => {
  const {AirlineData} = useContext(AirlineAppContext);

  return (
    <>
 
    </>
  )
}

export default LandingPage;