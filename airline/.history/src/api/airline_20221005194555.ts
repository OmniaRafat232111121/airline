import axios from 'axios'
import fetchJsonp from 'fetch-jsonp';
export interface AirlineData{

}
export const Api=()=>{
    async getAll():Promise<AirlineData[]>{
        const data=await fetchJsonp('http://kayak.com/h/mobileapis/directory/airlines/homework',{
            jsonpCallback: 'jsonp'
        })
        console.log(data);
        const response = await data.json();
        return response;
    }
}