import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neo-page',
  templateUrl: './neo-page.component.html',
  styleUrls: ['./neo-page.component.css']
})
export class NeoPageComponent implements OnInit {
  questions: Array<String> = [];
  answers = [];
  indexQuestionsWithNoAnswer: Array<Number> = [];
  constructor() {
    for (let index = 0; index < 60; index++) {
      this.questions.push( "Q" + index);
      this.answers.push(-1);
    }
    console.log(this.questions);
    console.log(this.answers);
   }

  ngOnInit() {
  }
  checkAnswers(){
    this.indexQuestionsWithNoAnswer = [];
    for (let index = 0; index < this.answers.length; index++) {
      const element = this.answers[index];
      if(element == -1){
        this.indexQuestionsWithNoAnswer.push(index);
      }
    }
    console.log(this.indexQuestionsWithNoAnswer);
  }
  whatHappens($event){
    console.log(this.answers);
  }
}
