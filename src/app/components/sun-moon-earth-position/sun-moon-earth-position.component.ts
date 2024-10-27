import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-sun-moon-earth-position',
  templateUrl: './sun-moon-earth-position.component.html',
  styleUrls: ['./sun-moon-earth-position.component.scss']
})
export class SunMoonEarthPositionComponent implements OnInit {

  @Input() options = {size: 150, planetSize: 40};
  @Input() info = {sunrise: new Date(), sunset: new Date(), dayLength: 43200, isDay: false};

  planetIcon:string = 'icon-night-clear';
  planetPosition: string = '(0px, 0px)';
  start: string | null = null;
  end: string | null = null;
  duration: string = '';

  constructor(private datePipe: DatePipe){

  }

  ngOnInit() {
    //console.log(this.info);
    this.movePlanet(); 
    this.calculateDuration();
  }

  get containerStyles() {
    return {
      width: ((this.options.size*2) + this.options.planetSize) + 'px',
      height: this.options.size + (this.options.planetSize/2) + 'px',
      top: -(this.options.planetSize/2) + 'px'
    };
  }

  get planetPathStyles() {
    return {
      width: (this.options.size*2) + 'px',
      height: (this.options.size*2) + 'px',
      bottom: -this.options.size + 'px',
      left: (this.options.planetSize/2) + 'px'
    };
  }

  get planetStyles() {
    return {
      width: this.options.planetSize + 'px',
      height: this.options.planetSize + 'px',
    };
  } 

  movePlanet(){
      const now = (new Date()).getTime();
      const sunrise = (new Date(this.info.sunrise)).getTime();
      const sunset = (new Date(this.info.sunset)).getTime();

      let duration = 0;
      this.end = this.datePipe.transform(this.info.sunrise, 'h:mm a');
      this.start = this.datePipe.transform(this.info.sunset, 'h:mm a');

      if (this.info.isDay) {
        this.planetIcon = 'icon-day-clear';
        this.end = this.datePipe.transform(this.info.sunset, 'h:mm a');
        this.start = this.datePipe.transform(this.info.sunrise, 'h:mm a');
      }

      this.info.isDay ? duration = sunset - sunrise : duration = sunrise - sunset;

      const progress = (this.info.isDay) ? (now - sunrise) / duration : (now - sunset) / duration; 
      const angle = this.info.isDay ? -Math.PI * (1 - progress) : Math.PI * (1 - progress);
      const radius = this.options.size;
      console.log(progress);
      const x = ( radius * Math.cos(angle) ) + radius;
      const y = ( radius * Math.sin(angle) ) + (this.options.planetSize/2);
      
      this.planetPosition = `translate(${x}px, ${y}px)`;

  }

  calculateDuration(){
    const seconds = this.info.isDay ? this.info.dayLength : 86400 - this.info.dayLength;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    this.duration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;    
  }
  
  

}
