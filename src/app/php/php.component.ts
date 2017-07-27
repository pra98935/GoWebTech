import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})
export class PhpComponent implements OnInit {
  pageBreadcrumb = "PHP Training";
  pageTitle = "PHP Training Overview";
  constructor(private metaService: Meta) { }

  ngOnInit() {
    this.metaService.addTags([
          { name: 'description', content: 'PHP Training is one of the fastest growing technologies. GoWebTech specialize in training in Angular JS Training. We Are Leading Framework Training Center in Indore.' },
          { name: 'keywords', content: 'PHP Training, Angular JS Training Training, Angular JS Training training indore, Angular JS  training indore, Angular JS  training indore, Angular JS Training training indore, Angular JS  corporate training' }
      ]);
  }

}
