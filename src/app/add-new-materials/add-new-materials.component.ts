import { Component } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-add-new-materials",
  templateUrl: "./add-new-materials.component.html",
  styleUrls: ["./add-new-materials.component.css"],
})
export class AddNewMaterialsComponent {
  faCoffee = faCoffee;
}
