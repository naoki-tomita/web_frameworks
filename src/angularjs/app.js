"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("reflect-metadata");
require("zone.js");
require("rxjs/Rx");
const core_1 = require("angular2/core");
const browser_1 = require("angular2/platform/browser");
let Days = class Days {
    constructor() {
        this.days = [
            { day: 0 },
            { day: 1 },
            { day: 2 }
        ];
    }
    ;
    change(year, month) {
    }
    ;
};
Days = __decorate([
    core_1.Component({
        selector: "days",
        template: `
    <li *ngFor="let day of days">
      {{day.day}}
    </li>
  `
    }),
    __metadata("design:paramtypes", [])
], Days);
;
let Calendar = class Calendar {
    constructor() {
        this.ngYear = new Date().getFullYear().toString();
        this.ngMonth = (new Date().getMonth() + 1).toString();
    }
};
Calendar = __decorate([
    core_1.Component({
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
        directives: [Days]
    }),
    __metadata("design:paramtypes", [])
], Calendar);
;
browser_1.bootstrap(Calendar);
