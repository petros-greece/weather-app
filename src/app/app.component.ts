import { Component, OnInit } from '@angular/core';
import { CoreService } from './services/core-service.service';

type WeatherInfo = {
  city: string;
  country: string;
  temperature: string;
  sunrise: Date;
  sunset: Date;
  dayLength: number;
  isDay: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  info:WeatherInfo = {
    city: 'Athens',
    country: 'Greece',
    temperature: '17',
    sunrise: new Date(),
    sunset: new Date(),
    dayLength: 0,
    isDay: false,
  }


  constructor(
    private coreService: CoreService,
  ){

  }

  ngOnInit(): void {
    this.coreService.getPosition().subscribe( (position)=>{
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      this.coreService.getSunriseSunset(lat, lng).subscribe(
        (response) => {
          if(response.status && response.status === 'OK'){            
            const sunrise = new Date(response.results.sunrise);
            const sunset = new Date(response.results.sunset);
            this.info.sunrise = sunrise;
            this.info.sunset = sunset;
            this.info.dayLength = response.results.day_length;
            this.checkIfIsDay(sunrise, sunset);
          }
        })

    })
  }

  private checkIfIsDay(sunrise: Date, sunset: Date){
    const now = (new Date()).getTime() - 1000*60*60*18;
    if ( now >= sunrise.getTime() && now <= sunset.getTime() ) {
      this.info.isDay = true;
    }
  }
  

}
