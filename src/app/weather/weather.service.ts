import { Injectable } from "@angular/core";
import {Http,Response} from '@angular/http';
import {Observable} from "rxjs/Observable"
import  'rxjs/add/operator/map';

@Injectable()
export class WeatherService{

    constructor(private _http : Http){

    }

    getWeatherDetails() : Observable<any[]> {
        return this._http.get('http://api.openweathermap.org/data/2.5/group?id=1277333,1269843,1264527,1275339,1273294&units=metric&appid=6fcafada96ebd247c3441b32599977ec')
                .map((response : Response) => response.json().list);     
    }


    getWeatherByCity(cityId : number){
        return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id='+cityId+'&units=metric&appid=6fcafada96ebd247c3441b32599977ec')
                .map((response : Response) => response.json().list);
    }

    getCityName(cityId : number){
        return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id='+cityId+'&units=metric&appid=6fcafada96ebd247c3441b32599977ec')
        .map((response : Response) => response.json().city.name);
    }
}