import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {

  @Input() info = {temperature: '', city: '', country: '', isDay: false};


}
