import { Component } from "@angular/core";
import { WeatherService } from "./weather.service";
import { ActivatedRoute } from "@angular/router";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WeatherListComponent } from "./weatherList.component";

@Component({
 
    selector : 'weather-item',
    templateUrl : './weatherItem.component.html',
    styleUrls : ['./assets/itemStyle.css'],
               

})
export class WeatherItemComponent implements OnInit{

    weatherItems  : any [];

    cityName :  string ;
    

    constructor(private _weatherItemService : WeatherService,private _activatedRoute : ActivatedRoute
                ,private _router : Router){
        
    }
    ngOnInit(){
     let cityId = this._activatedRoute.snapshot.params['id'];
     this._weatherItemService.getWeatherByCity(cityId)
     .subscribe((weatherData) => this.weatherItems = weatherData);

     this._weatherItemService.getCityName(cityId)
     .subscribe((cityName) => this.cityName = cityName);
     
    }

    onBackButtonClick(){
        this._router.navigate(['/WeatherInfo']);
    }
}