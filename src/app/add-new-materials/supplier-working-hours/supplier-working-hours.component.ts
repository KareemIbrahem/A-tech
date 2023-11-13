import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

interface TimeField {
  startTime: string;
  endTime: string;
  [key: string]: string;
}

@Component({
  selector: "app-supplier-working-hours",
  templateUrl: "./supplier-working-hours.component.html",
  styleUrls: ["./supplier-working-hours.component.css"],
})
export class SupplierWorkingHoursComponent {
  showTimeFields = true;

  timeFields: TimeField[] = [{ startTime: "", endTime: "" }];

  updateTimeField(index: number, field: string, value: string): void {
    if (!this.timeFields[index]) {
      this.timeFields[index] = { startTime: "", endTime: "" };
    }

    this.timeFields[index][field] = value || "";
  }

  addTimeField(): void {
    this.timeFields.push({ startTime: "", endTime: "" });
  }

  removeTimeField(index: number): void {
    if (index >= 1 && index < this.timeFields.length) {
      this.timeFields.splice(index, 1);
    }
  }
  daysOfWeek = [
    "السبت",
    "الاحد",
    "الاثنين",
    "الثلاثاء",
    "الاربعاء",
    "الخميس",
    "الجمعة",
  ];
  showTimeFieldsByDay: boolean[] = Array(this.daysOfWeek.length).fill(true);
  selectedDay: string = "";
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang("ar");
  }

  // Example usage of translation in TypeScript code
  someFunction(): void {
    const selectKey = "supplierWorkingHours.select";
    const configureKey = "supplierWorkingHours.configure";

    const translatedSelect = this.translate.instant(selectKey);
    const translatedConfigure = this.translate.instant(configureKey);

    console.log(translatedSelect);
    console.log(translatedConfigure);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
