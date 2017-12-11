export interface Question {
    headline : string;
    choices:Choices[];

}
export  interface Choices{
    label:string;
    value:string;
}