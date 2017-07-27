import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
   pageBreadcrumb = "Angular JS Training";
   pageTitle = "Angular JS Training Training Overview";
   constructor(private metaService: Meta, private titleService: Title ) { }



  ngOnInit() {

      this.titleService.setTitle('Angular Title');

      this.metaService.addTags([
          { name: 'description', content: 'Angular JS Training is one of the fastest growing technologies. GoWebTech specialize in training in Angular JS Training. We Are Leading Framework Training Center in Indore.' },
          { name: 'keywords', content: 'Angular JS Training, Angular JS Training Training, Angular JS Training training indore, Angular JS  training indore, Angular JS  training indore, Angular JS Training training indore, Angular JS  corporate training' }
      ]);

  }

  // setTitle( newTitle: string) {
  //   this.titleService.setTitle( newTitle );
  // }

}
