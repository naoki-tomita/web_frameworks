import "reflect-metadata";
import "zone.js";
import "rxjs/Rx";

import { Component } from 'angular2/core';
import { bootstrap } from "angular2/platform/browser";
import { CORE_DIRECTIVES } from "angular2/common";

@Component( {
  selector: "days",
  template: `
    <li *ngFor="let day of days">
      {{day.day}}
    </li>
  `
} )
class Days {
  year: string;
  month: string;
  days: Array<Object>;
  constructor() {
    this.days = [
      { day: 0 },
      { day: 1 },
      { day: 2 }
    ]
  };
  change( year: string, month: string ) {

  };
};

@Component( {
  selector: "calendar",
  template: `
    year: <input type="text" [(ngModel)]="ngYear">
    month: <input type="text" [(ngModel)]="ngMonth">
    <ul id="calendar">
      <li>mon</li>
      <li>tue</li>
      <li>wed</li>
      <li>thu</li>
      <li>fri</li>
      <li>sat</li>
      <li>sun</li>
      <days></days>
    </ul>
  `,
  directives: [ Days ]
} )
class Calendar {
  ngYear: string;
  ngMonth: string;
  constructor() {
    this.ngYear = new Date().getFullYear().toString();
    this.ngMonth = ( new Date().getMonth() + 1 ).toString();
  }
};

bootstrap( Calendar );
