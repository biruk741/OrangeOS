import { LoginComponent } from './screens/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './screens/desktop/desktop.component';

const routes: Routes = [
  {path: "", component: LoginComponent,},
  {path: "desktop", component: DesktopComponent},

];//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
