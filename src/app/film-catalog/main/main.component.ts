import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pageName: string = "Film Catalog Dashboard";

  isRed = true;
  value: number = Math.floor(4.15);

  website: {} = {
    url: 'http://google.com',
    title: 'Google Site'
  }

  list: string[] = ['asd', 'asd']; 

  constructor() { }

  ngOnInit() { }

}
