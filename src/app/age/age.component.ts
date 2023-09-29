import { Component } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css'],
})
export class AgeComponent {
  currentDate: Date = new Date();
  currentYear: number = this.currentDate.getFullYear();
  currentMonth: number = this.currentDate.getMonth() + 1;
  currentDay: number = this.currentDate.getDate();

  AgeY: number | undefined;
  AgeM: number | undefined;
  AgeD: number | undefined;

  Day: number | undefined;
  Month: number | undefined;
  Year: number | undefined;

  constructor() {}

  AgeCalculate() {
    if (
      this.Year === undefined ||
      this.Month === undefined ||
      this.Day === undefined
    ) {
      this.AgeY = undefined;
      this.AgeM = undefined;
      this.AgeD = undefined;
      return;
    }

    const currentYear = this.currentDate.getFullYear();
    const currentMonth = this.currentDate.getMonth() + 1;
    const currentDay = this.currentDate.getDate();

    const birthYear = parseInt(this.Year.toString());
    const birthMonth = parseInt(this.Month.toString());
    const birthDay = parseInt(this.Day.toString());

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    // Adjust for negative age months
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
    // Adjust for negative age days
    if (ageDays < 0) {
      const lastDayOfPreviousMonth = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      ageMonths--;
      ageDays += lastDayOfPreviousMonth;
    }
    // Update the AgeY, AgeM, and AgeD properties
    this.AgeY = ageYears;
    this.AgeM = ageMonths;
    this.AgeD = ageDays;
  }
}
