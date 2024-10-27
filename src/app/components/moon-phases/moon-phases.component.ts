import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon-phases',
  templateUrl: './moon-phases.component.html',
  styleUrls: ['./moon-phases.component.scss']
})
export class MoonPhasesComponent implements OnInit{

  moonPhase: number = 0;
  moonPhaseDescription: string = '';
  nextFoolMoon = new Date();
  knownNewMoon = new Date(Date.UTC(2020, 6, 20));
  lunarCycle = 29.53;

  constructor() {}

  ngOnInit(): void {
    this.moonPhase = this.getMoonPhase();
    this.moonPhaseDescription = this.getMoonPhaseDescription(this.moonPhase);
    this.nextFoolMoon = this.getNextFullMoon();
  }

  getMoonPhase(date: Date = new Date()): number {
    // Calculate days between known new moon and provided date
    const diffInDays = (date.getTime() - this.knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
    const phase = diffInDays % this.lunarCycle;
    // Calculate moon phase as a percentage
    const moonPhasePercent = (phase / this.lunarCycle) * 100;
    return moonPhasePercent;
  }

  // Method to dynamically set the moon phase clip path
  getMoonClipPath(phasePercent: number): string {
    const phase = (phasePercent / 100) * 2 * Math.PI; // Convert to radians for a smooth transition
    if (phasePercent < 50) {
      // Waxing crescent to first quarter
      return `circle(50% at ${50 + (phasePercent / 50) * 50}% 50%)`;
    } else if (phasePercent < 100) {
      // Waning gibbous to full moon
      return `circle(50% at ${50 - ((phasePercent - 50) / 50) * 50}% 50%)`;
    } else {
      // New moon
      return 'circle(0% at 50% 50%)';
    }
  }

  getMoonPhaseDescription(phasePercent: number): string {
    if (phasePercent < 5) return 'New Moon';
    if (phasePercent < 25) return 'Waxing Crescent';
    if (phasePercent < 30) return 'First Quarter';
    if (phasePercent < 45) return 'Waxing Gibbous';
    if (phasePercent < 55) return 'Full Moon';
    if (phasePercent < 70) return 'Waning Gibbous';
    if (phasePercent < 75) return 'Last Quarter';
    if (phasePercent < 95) return 'Waning Crescent';
    return 'New Moon';
  }

  getNextFullMoon(date: Date = new Date()): Date {
    // Calculate difference in days between the provided date and the reference full moon
    const diffInDays = (date.getTime() - this.knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
    // Calculate number of cycles needed to reach the next full moon after today
    const cycles = Math.ceil(diffInDays / this.lunarCycle);
    // Calculate the next full moon date
    const nextFullMoon = new Date(this.knownNewMoon.getTime() + cycles * this.lunarCycle * 24 * 60 * 60 * 1000);
    return nextFullMoon;
  }
  // Example usage
  //console.log("Next full moon:", getNextFullMoon().toUTCString());


}
