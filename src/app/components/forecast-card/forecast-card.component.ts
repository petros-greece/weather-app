import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent {

  @Input() info = {isDay:false}

  UI = {
    temperarureUnit: 'C',
    hours:<string[]> [],
    days:<string[]> [],
  }

  forecastHours = [
    {
      datetime: 'NOW',
      temperature: 17,
      moisture:  5,  
      wind: 15,
      sky: 'clear'       
    },
    {
      datetime: '4PM',
      temperature: 16,
      moisture:  28,
      wind: 30,
      sky: 'clear'
    },
    {
      datetime: '5PM',
      temperature: 16,
      moisture:  45,
      wind: 30,
      sky: 'cloudy'        
    },
    {
      datetime: '6PM',
      temperature: 14,
      moisture:  28,
      wind: 30,
      sky: 'rain'         
    },
    {
      datetime: '7PM',
      temperature: 12,
      moisture:  17,
      wind: 30,
      sky: 'storm'
    },
    {
      datetime: '8PM',
      temperature: 12,
      moisture:  17,
      wind: 30,
      sky: 'storm'
    }
  ];

  forecastDays = [
    {
      datetime: 'TODAY',
      temperatureMin: 11,
      temperatureMax: 18,     
      moisture:  5,  
      wind: 15,
      sky: 'cloudy'      
    },
    {
      datetime: 'Sun',
      temperatureMin: 7,
      temperatureMax: 14, 
      moisture:  23,
      wind: 30,
      sky: 'storm'
    },
    {
      datetime: 'Mon',
      temperatureMin: 5,
      temperatureMax: 11, 
      moisture:  45,
      wind: 30,
      sky: 'cloudy'
    },
    {
      datetime: 'Tue',
      temperatureMin: -1,
      temperatureMax: 8, 
      moisture:  28,
      wind: 20,
      sky: 'snow'
    },
    {
      datetime: 'Wed',
      temperatureMin: -4,
      temperatureMax: 6, 
      moisture: 50,
      wind: 70,
      sky: 'snowstorm'
    },
    {
      datetime: 'Thu',
      temperatureMin: -3,
      temperatureMax: 9, 
      moisture: 40,
      wind: 70,
      sky: 'snowstorm'
    }
  ];


  constructor(){
    this.fillNextHours();
    this.fillNextDays();
  }

  fillNextHours(howMany = 6){
    const now = new Date();
    this.UI.hours.push('NOW');
    for (let i = 1; i < howMany; i++) {
      const futureTime = new Date(now.getTime() + i * 60 * 60 * 1000);
      this.UI.hours.push(this.formatAMPM(futureTime));
    }
  }

  private formatAMPM(date: Date): string {
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const strTime = hours + ampm;
    return strTime;
  }

  fillNextDays( howMany = 6 ) {
    const today = new Date();
    this.UI.days.push('TODAY');
    for (let i = 1; i < howMany; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const dayName = nextDay.toLocaleString('en-US', { weekday: 'short' });
      this.UI.days.push(dayName);
    }  
  }
  

}
