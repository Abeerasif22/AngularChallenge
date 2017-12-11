export interface Question {
    choices: choices[];
}
 export interface choices{
     label:string
     value:string
     selected:boolean
 }