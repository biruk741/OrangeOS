import { App } from './../../models/app';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css']
})
export class AppIconComponent implements OnInit {

  @Input() app : App = {
    name:"Chrome",
    icon:"/assets/chrome.png",
    id:1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
