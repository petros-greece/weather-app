import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private sunriseApiUrl = 'https://api.sunrise-sunset.org/json';

  constructor(private http: HttpClient) { }

  
  getSunriseSunset(lat: number, lng: number): Observable<any> {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);
    const url = `${this.sunriseApiUrl}?lat=${lat}&lng=${lng}&date=${formattedDate}&formatted=0`;
    return this.http.get(url);
  }

  getPosition(): Observable<GeolocationPosition> {
    return new Observable((observer) => {
      // Check if geolocation is supported by the browser
      if (!navigator.geolocation) {
        observer.error('Geolocation is not supported by your browser');
      }

      // Get the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position);
          observer.complete();
        },
        (error) => {
          observer.error(this.getGeolocationErrorMessage(error));
        }
      );
    });
  }

  private getGeolocationErrorMessage(error: GeolocationPositionError): string {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return 'User denied the request for Geolocation.';
      case error.POSITION_UNAVAILABLE:
        return 'Location information is unavailable.';
      case error.TIMEOUT:
        return 'The request to get user location timed out.';
      default:
        return 'An unknown error occurred.';
    }
  }




}
