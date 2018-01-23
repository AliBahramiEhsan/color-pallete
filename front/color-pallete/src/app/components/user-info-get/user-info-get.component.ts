import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $ : any;
@Component({
  selector: 'app-user-info-get',
  templateUrl: './user-info-get.component.html',
  styleUrls: ['./user-info-get.component.css']
})
export class UserInfoGetComponent implements OnInit {
  userName = "";
  email = "";
  age = 0;
  gender = "male";
  errorInInputs = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  checkInputs(){
    this.errorInInputs = [];
    if(this.userName == ""){
      this.errorInInputs.push("Name input is empty.");
    }
    if (this.email == "") {
      this.errorInInputs.push("Email input is empty.");
    }
    else{
      if (!this.email.includes("@")) {
        this.errorInInputs.push("Email input is incorrect. Missing @ symbol.");
      }
    }
    if (this.age == 0) {
      this.errorInInputs.push("Age input is empty.");
    }
    if (this.errorInInputs.length === 0){
      setTimeout(() => {
        this.router.navigate(['/neoTest']);
      }, 200);
    }
    else{
      $('#errorInInputs').modal('show');
      setTimeout(() => {
        $('#errorInInputs').modal('hide');
      }, 3500);
      
    }
  }
}
