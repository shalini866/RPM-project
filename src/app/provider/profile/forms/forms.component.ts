import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  patientform!: FormGroup;
  formControl = new FormControl(new Date());
 

  constructor(private fb: FormBuilder) {
    this.patientform = this.fb.group({
      name:'',
      number:'',
      firstuser: this.fb.array([]),
    })
  } 
  ngOnInit() {
  }
  get firstuser(){
    return (this.patientform.get('firstuser') as FormArray)
}
  formgrp(): FormGroup{
    return this.fb.group({
      firstName:'',
      lastName:'',
      password:'', 
      date:'',
      seconduser:this.fb.array([])
    });
  }
 
  adduser(){
    this.firstuser.push(this.formgrp());
    console.log('the add group is givne as:', this.patientform);
  }
 remove(i:number){
  this.firstuser.removeAt(i);
  console.log('the add group is givne as:', this.patientform);
 }

 extradetials(i:number):FormArray{
  return this.firstuser
  .at(i)
  .get("seconduser") as FormArray;
 }

  newgrp():FormGroup{
   return this.fb.group({
    age:"",
    gender:""
   })
  }
  addgrp2(i:number){
   this.extradetials(i).push(this.newgrp());
   console.log('the add group is givne as:', this.patientform);
   
  }                 

  removegrp2(i:number,x:number){
    this.extradetials(i).removeAt(x);
    console.log('the add group is givne as:', this.patientform);
   }
}

