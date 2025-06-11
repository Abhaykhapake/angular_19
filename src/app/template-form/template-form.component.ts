import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  userData:any={
    email:"",
    password:""
  }

  saveUser(){
    
    const formValue=this.userData;
    console.log(formValue);

  }
}
