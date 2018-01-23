import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-color-details',
  templateUrl: './color-details.component.html',
  styleUrls: ['./color-details.component.css']
})
export class ColorDetailsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  Meanings = ["mother", "father", "God", "country", "peace", "pain"];
  index = 0;
  SelectedMeaning = this.Meanings[this.index];
  buttonLabel = "Next meaning";
  selectedColor = "";
  selectedColorList = [];
  ngOnInit() {
  }
  goNext(){
    if (this.selectedColor === ""){
      $("#noColorSelected").modal('show');
      setTimeout(() => {
        $("#noColorSelected").modal('hide');
      }, 2000);
    }
    else{
      this.index++;
      if (this.index === this.Meanings.length-1){
        this.buttonLabel = "Done!";
      }
      this.selectedColorList.push(this.selectedColor);
      this.selectedColor = "";
      this.SelectedMeaning = this.Meanings[this.index];
      if (this.buttonLabel == "Done!"){
        // go to next page
        this.router.navigate(['/thankYou']);
        console.log(this.selectedColorList);
      }
    }
  }
}
