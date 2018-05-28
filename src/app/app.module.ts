import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from'@angular/forms';
import { AppComponent } from './app.component';
import { SignupformComponent } from './components/signupform/signupform.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
