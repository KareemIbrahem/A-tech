import { Component } from "@angular/core";

@Component({
  selector: "app-resources-availablelity",
  templateUrl: "./resources-availablelity.component.html",
  styleUrls: ["./resources-availablelity.component.css"],
})
export class ResourcesAvailablelityComponent {
  selectedOption: string = "option1";
  selectedOption1: string = "option3";

  showCounter: boolean = false;
  counterValue: number = 0;
  numValue: number = 0;

  increaseCounter() {
    this.counterValue++;
  }

  decreaseCounter() {
    if (this.counterValue > 0) {
      this.counterValue--;
    }
  }
}
