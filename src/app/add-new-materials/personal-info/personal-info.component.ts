import { Component } from "@angular/core";
import { PhotoUploadService } from "../../service/photo-upload.service";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.css"],
})
export class PersonalInfoComponent {
  imagePath: string = "../../../assets/Image-100.png";
  selectedFile: File | null = null;

  constructor(private photoUploadService: PhotoUploadService) {}

  onFileSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;
    this.selectedFile = (fileInput.files && fileInput.files[0]) || null;

    // Update imagePath when a file is selected
    this.readAndSetImage();
  }

  uploadPhoto(): void {
    if (this.selectedFile) {
      this.photoUploadService.uploadPhoto(this.selectedFile).subscribe(
        (response) => {
          console.log("Photo uploaded successfully", response);

          // If the upload is successful, update imagePath
          this.imagePath = response.url || ""; // Assuming your response has a URL property
        },
        (error) => {
          console.error("Error uploading photo", error);
        }
      );
    } else {
      console.warn("No file selected");
    }
  }

  private readAndSetImage(): void {
    if (this.selectedFile) {
      // Use FileReader to read the file and set the image source
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.imagePath = e.target.result as string;
        }
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
