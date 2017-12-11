import { Component, OnInit , ElementRef, animate } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from "../interfaces/question";
import { FormControl, FormGroup, Validators , FormBuilder , FormArray} from '@angular/forms';
import { Router } from "@angular/router";
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss'],
  providers: [QuestionService],
  host: {
    '(window:scroll)': 'updateScroll($event)',
    
}
})
export class Page2Component implements OnInit {
 
  data:any
  dataValue:Array <any>
  isValidFormSubmitted: boolean = null;
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 10;
  changePos: Number = 200;
  offsetTop:Number
  quesForm:FormGroup;
  scrollHeight

  constructor(private Question:QuestionService, private formBuilder: FormBuilder ,
  private router: Router , public el:ElementRef  ) {
  this.data=this.Question.getAll();
   }

  ngOnInit() { 
    this.load()
   this.createForm(); 
   this.scroller();

  }

  
load(){
  this.Question.getAll().subscribe((data) => {
    console.log("what is in the data ", (data));
    this.dataValue = data;
  }); 
  
}

createForm(){
this.quesForm=this.formBuilder.group({
checkChoice:[this.formBuilder.array([]), Validators.required ],
checkRadio:['', Validators.required ],
checkText:['', Validators.required ]

})
}
 
onChange(isChecked:boolean) {
  const emailFormArray = <FormArray>this.quesForm.controls.checkChoice;
  console.log(emailFormArray + 'emailFormArray')
  let scroller = this.el.nativeElement.querySelector('.questions-main_content');
  if(isChecked ) {
   // emailFormArray.push(new FormControl(choice));
console.log("abeer ")



return true;

  } else {
   // let index = emailFormArray.controls.findIndex(x => x.value == choice)
   // emailFormArray.removeAt(index);
  }
}
  navigate(){
    this.router.navigate(["page3"]);
  }

  
  updateScroll(evt) {
   // this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
 /* 
   let scroller = this.el.nativeElement.querySelector('.questions-main_content');
   console.log(scroller +'scroller');
   let scrollTop  = scroller.scrollTop
  console.log(scrollTop + 'scrollTop')
  const clientHeight = scroller.clientHeight
  console.log(clientHeight + 'clientHeight')
  const scrollHeight = scroller.scrollHeight
  console.log(scrollHeight + 'scrollHeight')

  const offsetTop  = scroller.offsetTop
  console.log(offsetTop + 'offsetTop')

let currentView= scroller.clientHeight-scroller.offsetTop
console.log(currentView +'currentView')

  const emailFormArray = <FormArray>this.quesForm.controls.checkChoice;
  console.log(emailFormArray +'emailFormArray')



   if(scrollTop = offsetTop ) {
        this.isScrolled = true;
        console.log(this.isScrolled)
    } else {
        this.isScrolled = false;
    }  */
  }


  scroller() {
  /*   $(this.el.nativeElement).find('.questions-main_content').on('click', () => {
    
    });

    $('.checker').on('change', function() {
      var nextQuestion = $(this).closest('.questions-main_content').next();
      
      if (nextQuestion.length !== 0) {
        $('html, body').animate({
              scrollTop: nextQuestion.offset().top
          }, 1000);
      }
  }); */
}
/* checkScroll(){
  const componentPosition = this.el.nativeElement.offsetTop;
  const scrollPosition = window.scrollY;
  const slideInAt = (scrollPosition + window.innerHeight) - this.el.nativeElement.height / 2;
  const imageBottom = componentPosition + this.el.nativeElement.height;
  const isHalfShown = slideInAt > componentPosition;
  const isNotScrolledPast = scrollPosition < imageBottom;
  if (isHalfShown >= isNotScrolledPast) {
   // this.beState = 'show';
  } else {
    //this.beState = 'hid';
  }
} */

}
