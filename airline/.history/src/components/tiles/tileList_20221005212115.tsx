import React, { FunctionComponent } from 'react';
import { AirlineData } from '../../api/airline';
type TileListProps = {
    airlineData: AirlineData[]
  }
export const TileList:FunctionComponent<TileListProps>=({airLineData}:TileListProps)=>{
return(
    <div className="conatiner w-3/4 mx-4 py-2 flex-row mx-auto grid grid-cols-4 gap-2">
    {airlineData.map((i: AirlineData) => {
      return (
        <Tile data={i} key={i.code} />
      )
    })}
    {airlineData.length === 0 && <span>Loading ...</span>}
  </div>
)
}