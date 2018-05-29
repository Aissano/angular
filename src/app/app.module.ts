import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from'@angular/forms';
import { AppComponent } from './app.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { HomeComponent } from './components/home/home.component';
import{RouterModule} from '@angular/router';
import {RoutingModule} from './modules/routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
