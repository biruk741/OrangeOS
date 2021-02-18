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
    { name: "Chrome", icon: "assets/chrome.png" },
    { name: "VS Code", icon: "assets/vscode.png" },
    { name: "Calculator", icon: "assets/calculator.png" },
    { name: "Explorer", icon: "assets/folder.png" },
  ];
  openApps: App[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getBackground(): string {
    return "assets/bg1.jpg"
  }
  openApp(name) {
    this.openApps.push(
      this.apps.find(app => app.name == name)
    )
  }
  closeApp(index){
    this.openApps.splice(index,1);
  }
}
