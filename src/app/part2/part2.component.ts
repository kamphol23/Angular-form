import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class part2Component implements OnInit {
  formerWork: Array<any> = [];
  formWorkName;
  formerTitle;
  formerLong;
  graduationYearControl: AbstractControl;
  latestSchoolControl: AbstractControl;
  formCompany: AbstractControl;
  formerTitleControl: AbstractControl;
  formerLongControl: AbstractControl;
  userEndEmploymentControl: AbstractControl


  educationGroup: FormGroup = new FormGroup({
		latestSchoolControl: new FormControl('', [Validators.required, Validators.minLength(5)]),
    graduationYearControl: new FormControl('', [Validators.required, Validators.min(1930), Validators.maxLength(4), Validators.max(2019), Validators.pattern('[0-9 ]*')]),
		},

  );

  formerJobGroup: FormGroup = new FormGroup({
    formCompany: new FormControl('', [Validators.required, ]),
    formerTitleControl: new FormControl('', [Validators.required, ]),
    formerLongControl: new FormControl('', [Validators.required, ])
}
  );


  constructor() {


    this.formerWork =[
      {name:'Exampel', title:'Exampel', howLong:'Month/year'},
    ];

   }
 deleteWork(name){
     for(let i=0; i< this.formerWork.length; i++){
       if(this.formerWork[i]["name"] == name){
         this.formerWork.splice(i, 1);
       }
     }
   }

addFormerWork(){
  this.formerWork.push(
    {name:this.formWorkName, title: this.formerTitle , howLong: this.formerLong}
  )
}
  ngOnInit() {
    this.formCompany = this.formerJobGroup.controls['formCompany'];
    this.latestSchoolControl = this.educationGroup.controls['latestSchoolControl'];
    this.graduationYearControl = this.educationGroup.controls['graduationYearControl'];
    this.formerTitleControl = this.formerJobGroup.controls['formerTitleControl'];
    this.formerLongControl = this.formerJobGroup.controls['formerLongControl'];
    this.userEndEmploymentControl = this.formerJobGroup.controls['userEndEmploymentControl'];
  }

}
