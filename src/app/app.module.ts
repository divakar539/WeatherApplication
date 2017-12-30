import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent }  from './app.component';
import { WeatherItemComponent } from './weather/weatherItem.component';
import {WeatherListComponent} from './weather/weatherList.component';
import {WeatherService} from "./weather/weather.service"
import { HomeComponent } from './home.component';
import { PageNotFound } from './pageNotFound.component';



const appRoutes : Routes = [
  {path :'home', component : HomeComponent},
  {path : 'WeatherInfo' , component : WeatherListComponent},
  {path : 'WeatherInfo/:id',component : WeatherItemComponent},
  {path : '', redirectTo : '/home',pathMatch : 'full'},
  {path : '**' , component : PageNotFound}
];


@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,WeatherItemComponent,WeatherListComponent,HomeComponent,PageNotFound ],
  bootstrap:    [ AppComponent ],
  providers : [WeatherService]
})
export class AppModule { }
