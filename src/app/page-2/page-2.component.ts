import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from "../interfaces/question";
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { identifierModuleUrl } from '@angular/compiler';
import { ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss'],
  providers: [QuestionService],
  host: {

    'change': 'onClick( $event )'
  }
})
export class Page2Component implements OnInit {

  data: any

  dataValue: Array<any>
  isValidFormSubmitted: boolean = null;
  isScrolled = false;
  isChecked = []
  currPos: Number = 0;
  startPos: Number = 10;
  changePos: Number = 200;
  radioSelected: any
  Question: Question
  Choices: Array<Question>
  quesForm: FormGroup;
  ChoicesGroup: Array<any>


  constructor(private QuestionService: QuestionService, private formBuilder: FormBuilder,
    private router: Router, public el: ElementRef) {
    this.data = this.QuestionService.getAll();
  }

  ngOnInit() {
    this.load()
    this.createForm();
  }

  onClick(isChecked: Boolean) {

    const checkFormArray = <FormArray>this.quesForm.controls.checkChoice;

    let scrollers = this.el.nativeElement.querySelectorAll(".questions-main_content")

    for (let i = 0; i < scrollers.length; ++i) {
      let scrolling = scrollers[i]
      if (isChecked) {
        let next = scrollers[i].nextSibling
        next.scrollIntoView(false)

      } 
    }
  }
  load() {

    this.QuestionService.getAll().subscribe((data) => {

      this.dataValue = data;

    });

  }



  createForm() {
    this.quesForm = this.formBuilder.group({
      checkChoice: ['', Validators.required]
    })

  }

  navigate() {
    this.router.navigate(["page3"]);
  }


}
