import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oracle-sql',
  templateUrl: './oracle-sql.component.html',
  styleUrls: ['./oracle-sql.component.css']
})
export class OracleSqlComponent implements OnInit {
   pageBreadcrumb = "Oracle PL/SQL Training";
   pageTitle = "Oracle PL/SQL Training Overview";
  constructor() { }

  ngOnInit() {
  }

}

