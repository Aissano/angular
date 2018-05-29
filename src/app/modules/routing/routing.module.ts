import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes, RouterModule} from '@angular/router';
import { SignupformComponent } from './../../components/signupform/signupform.component';
import { HomeComponent } from './../../components/home/home.component';



const routes: Routes= [
{path:'',redirectTo:'signup', pathMatch: 'full'},
{path:'signup', component: SignupformComponent},
{path:'home', component: HomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

  RouterModule.forRoot(routes,{useHash: true})
  ],
  declarations: []
})

export class RoutingModule { }
