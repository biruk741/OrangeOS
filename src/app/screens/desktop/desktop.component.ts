import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {


  background:string;

  constructor() { }

  ngOnInit(): void {
  }

  getBackground() : string{
    return "assets/bg1.jpg"
  }
}
