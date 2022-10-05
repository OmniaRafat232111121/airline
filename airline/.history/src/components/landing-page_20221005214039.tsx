import React, {FunctionComponent , useContext} from 'react';
import { AirlineAppContext } from '../context/airline-context';

import HeaderComp from './header';
import TileList from './tiles/tileList';

const LandingPage: FunctionComponent <{}>  = () => {
  const {AirlineData} = useContext(AirlineAppContext);

  return (
    <>
    <HeaderComp />
    <Actions />
    <TileList airlineData={AirlineData} />
    </>
  )
}

export default LandingPage;