import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-time-field",
  templateUrl: "./time-field.component.html",
  styleUrls: ["./time-field.component.css"],
})
export class TimeFieldComponent {
  @Input() label!: string;
  @Input() time!: string;
  @Output() timeChange = new EventEmitter<string>();

  updateTime(value: string): void {
    this.timeChange.emit(value);
  }
}
