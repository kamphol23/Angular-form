import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup, MinLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class part1Component implements OnInit {
  lastNameControl: AbstractControl;
  firstNameControl: AbstractControl;
  cityControl: AbstractControl;
  aboutControl = new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(200)]);


  nameGroup: FormGroup = new FormGroup({
  firstNameControl: new FormControl('', [Validators.required]),
  cityControl: new FormControl('', [Validators.required]),
  lastNameControl: new FormControl('', [Validators.required])
  },
);



  addLanguageCompetence() {
    let language = this.languageCompetenceControl.value;
    this.selectedLanguage.push(language)

  }

  languageCompetenceControl = new FormControl('', [Validators.required]);
  languages: string [] = ['JavaScript', 'HTML', 'CSS', 'TypeScript',  'Python','Pascal', 'Google', 'Stack' ];
  selectedLanguage: string [] = [];
  languagesCheck: boolean = false;


  constructor() {  }

  ngOnInit() {
    this.lastNameControl = this.nameGroup.controls['lastNameControl'];
    this.cityControl = this.nameGroup.controls['cityControl'];
    this.firstNameControl = this.nameGroup.controls['firstNameControl'];

  }



}
