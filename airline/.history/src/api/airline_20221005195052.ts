import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';
export interface AirlineData {
  site: string;
  code: string;
  alliance: string;
  logoURL: string;
  name: string;
  phone: string;
}
//fetch data=interface
export const Api = {
  async getAll(): Promise<AirlineData[]> {
    const data = await fetchJsonp('http://kayak.com/h/mobileapis/directory/airlines/homework', {
      jsonpCallback: 'jsonp'
    })
    console.log(data);
    const response = await data.json();
    return response;
  }
}