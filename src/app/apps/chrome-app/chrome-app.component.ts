import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-chrome-app',
  templateUrl: './chrome-app.component.html',
  styleUrls: ['./chrome-app.component.css']
})
export class ChromeAppComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('"https://www.google.com"');

   }

  @Output() close = new EventEmitter();

  url : SafeResourceUrl;


  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com');

  }


  closeWindow(){
    this.close.emit();
  }

  search(query){
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(query);
  }

}
