import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  m1:string | undefined;
  m2:string | undefined;
  m3:string | undefined;
  m4:string | undefined;
  m5:string | undefined;
  m6:string | undefined;
    profileForm = new FormGroup({
      firstName:new FormControl('Name',Validators.required),
      lastName:new FormControl("",[Validators.minLength(5)]),
      email:new FormControl("",[Validators.email,Validators.required]),
      city:new FormControl("",Validators.required),
      gender:new FormControl("",Validators.required),
      lang:new FormControl("",Validators.required)           
       });
       onSubmit()
       {
          this.m1=this.profileForm.value.firstName;
          this.m2=this.profileForm.value.lastName;
          this.m3=this.profileForm.value.email;
          this.m4=this.profileForm.value.city;
          this.m5=this.profileForm.value.gender;
          this.m6=this.profileForm.value.lang;
          
       }

}
