import { Component, OnInit } from '@angular/core';
import { App } from 'src/app/models/app';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {


  background: string;
  apps: App[] = [
    {name:"Chrome",icon:"assets/chrome.png"},
    {name:"VS Code",icon:"assets/vscode.png"},
    {name:"Calculator",icon:"assets/calculator.png"},
    {name:"Explorer",icon:"assets/folder.png"},

  ];

  constructor() { }

  ngOnInit(): void {
  }

  getBackground(): string {
    return "assets/bg1.jpg"
  }
}
