import {Component} from '@angular/core';
//import {WeatherItemComponent} from './weatherItem.component';
import { WeatherService } from './weather.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({

    selector : 'weather-list',
    templateUrl : './weatherList.component.html',
    styleUrls : ['./assets/listStyle.css'],
})

export class WeatherListComponent implements OnInit {

    weatherList : any[];

    sortedList : any[];
    cityName : string;

    constructor(private _weatherService : WeatherService){

    }
   

    ngOnInit(){
        this._weatherService.getWeatherDetails()
        .subscribe((weatherData) => this.weatherList = weatherData);
    }

   sortList () {
        
        this.sortedList = this.weatherList.sort(this.sortByTemp);
    }

     sortByTemp(c1 : any,c2 : any){
        if(c1.main.temp < c2.main.temp) return 1;
        else if(c1.main.temp === c2.main.temp) return 0;
        else return -1;
        
    }

    sortByTempRev(){
 
        var last = this.sortedList.length;
        var tem;
        for(let i=0;i<this.sortedList.length/2;i++){
             tem = this.sortedList[i];
             this.sortedList[i] = this.sortedList[last-1];
             this.sortedList[last-1] = tem;
             last--; 
        }
        this.weatherList = this.sortedList;
    }

}