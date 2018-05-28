import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,Validator, Validators} from'@angular/forms';
import{Civilite} from'./../../models/civilite';
import { User } from '../../models/user';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {

  public civilite: Civilite[];

private user: User;
public signupForm: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.civilite = new Array();
    this.civilite.push({id:1,libelle:'Mademoiselle'});
    this.civilite.push({id:2,libelle: 'Madame'});
    this.civilite.push({id:3,libelle:'Monsieur'});

  }
public get nom(){return this.signupForm.controls.nom; }
public get prenom(){return this.signupForm.controls.prenom; }
public get email(){return this.signupForm.controls.email; }
public get password(){return this.signupForm.controls.password; }

public onFormSubmit():void{
  if(this.signupForm.valid){
    console.log('Youpiii !'+ JSON.stringify(this.user));
  }else{
    console.log('sameplayer shootagain !!!');
  }

}
  ngOnInit() {
    this.signupForm =this.builder.group({
      nom: ['',Validators.required],
      prenom: [''],
      email:['', [Validators.required,Validators.email]],
      civilite: [''],
      cgu: [false, Validators.requiredTrue],
      password:['',Validators.required],
      //confirmpassword: new FormControl('',Validators.required),
    });
    }
   

}
