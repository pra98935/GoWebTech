import { Component, OnInit } from '@angular/core';

import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    
    //Service
    trigger('focusPanel',[
      state('inactive', style({
        display:'none'
      })),
      state('active', style({
        display:'block'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-in'))
    ]),

    //Our Training
    trigger('focusPanel1',[
      state('off', style({
        display:'none'
      })),
      state('on', style({
        display:'block'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-in'))
    ]),


  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  state:string="inactive";
  state1:string="off";
  toggleMenu(){
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
   toggleMenu1(){
    this.state1 = (this.state1 === 'off' ? 'on' : 'off');
  }

  ngOnInit() {
  }

}
