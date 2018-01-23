import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import * as $ from "jquery";
declare var $: any;
@Component({
  selector: 'app-neo-page',
  templateUrl: './neo-page.component.html',
  styleUrls: ['./neo-page.component.css']
})
export class NeoPageComponent implements OnInit {
  questions: Array<String> = [];
  answers = [];
  indexQuestionsWithNoAnswer: Array<Number> = [];
  constructor(
    private router: Router
  ) {
    for (let index = 0; index < 60; index++) {
      this.questions.push( "Q" + index);
      this.answers.push(-1);
    }
    console.log(this.questions);
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
    if(this.indexQuestionsWithNoAnswer.length === 0){
      $('#Congrags').modal('show');
      setTimeout(() => {
        $('#Congrags').modal('hide');
      }, 2000);
      setTimeout(() => {
        this.router.navigate(['/mainPallete']);
      }, 2300);
    }
    else{
      $('#QuestionsWithNoAnswer').modal('show');

    }
    console.log(this.indexQuestionsWithNoAnswer);
  }

  check(value, index){
    $(document).ready(function(){
      $('#radio-1-' + index).prop('checked', false);
      $('#radio-2-' + index).prop('checked', false);
      $('#radio-3-' + index).prop('checked', false);
      $('#radio-4-' + index).prop('checked', false);
      $('#radio-5-' + index).prop('checked', false);
      $('#radio-' + value + '-' + index).prop('checked', true);
    });
    this.answers[index] = value;
    console.log(this.answers);
  }
  whatHappens($event){
    console.log(this.answers);
  }
  forceToColor(){
    $('#QuestionsWithNoAnswer').modal('hide');
    setTimeout(() => {
      this.router.navigate(['/mainPallete']);
    }, 300);
  }
}
