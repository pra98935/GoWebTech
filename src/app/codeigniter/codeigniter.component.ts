import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codeigniter',
  templateUrl: './codeigniter.component.html',
  styleUrls: ['./codeigniter.component.css']
})
export class CodeigniterComponent implements OnInit {
   pageBreadcrumb = "CodeIgniter Training";
   pageTitle = "Codeigniter Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
