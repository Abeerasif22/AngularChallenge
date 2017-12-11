import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class QuestionService {
data:any
  constructor(public http:Http) { }
  getAll() {
    console.log('json called');
    return this.http.get("../assets/json/questionnaire.json")
    .map((res:Response) => res.json().questionnaire.questions)
    }


