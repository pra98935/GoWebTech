import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joomla',
  templateUrl: './joomla.component.html',
  styleUrls: ['./joomla.component.css']
})
export class JoomlaComponent implements OnInit {
    pageBreadcrumb = "Joomla Training";
   pageTitle = "Joomla Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
