import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { FormsModule } from '@angular/forms';
import { DesktopComponent } from './screens/desktop/desktop.component';
import { AppIconComponent } from './widgets/app-icon/app-icon.component';
import { TaskbarComponent } from './widgets/taskbar/taskbar.component';
import { ChromeAppComponent } from './apps/chrome-app/chrome-app.component';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DesktopComponent,
    AppIconComponent,
    TaskbarComponent,
    ChromeAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularDraggableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
