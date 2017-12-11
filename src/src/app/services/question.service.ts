import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Question } from "../interfaces/question";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class QuestionService {
data:any
  constructor(public http:Http) { }
  getAll(): Observable<Question []> {
    console.log('json called');
    return this.http.get("../assets/json/questionnaire.json")
    .map((res:Response) => res.json().questionnaire.questions as Question[])
    .do((data) => 
    {
     console.log(data);
     console.log(data[0].choices[0].label);
     })
     
     
    }
 

}
