import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dotnet',
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.css']
})
export class DotnetComponent implements OnInit {
   pageBreadcrumb = "C#.NET Training";
   pageTitle = "C#.NET Training Overview";
  constructor() { }

  ngOnInit() {
  }

}
