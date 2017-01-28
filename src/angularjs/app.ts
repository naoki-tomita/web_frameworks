import "reflect-metadata";
import "zone.js";
import "rxjs/Rx";

import { calendar } from "../calendar.js";

import { Component, Input, OnInit, OnChanges } from 'angular2/core';
import { bootstrap } from "angular2/platform/browser";
import { CORE_DIRECTIVES } from "angular2/common";


@Component( {
  selector: "days",
  template: `
    <li *ngFor="let day of days">
      {{day.date}}
    </li>
  `
} )
class Days implements OnInit, OnChanges {
  @Input( "ngYear" ) year: string;
  @Input( "ngMonth" ) month: string;
  days: Array<Object>;
  constructor() {

  };
  change( year: string, month: string ) {
    this.days = calendar.createDates( this.year, this.month );
  };
  ngOnChanges() {
    this.change( this.year, this.month );
  };
  ngOnInit() {
    this.change( this.year, this.month );
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
      <days [ngYear]="ngYear" [ngMonth]="ngMonth"></days>
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
