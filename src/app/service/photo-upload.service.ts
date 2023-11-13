// photo-upload.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PhotoUploadService {
  private apiUrl = "your_upload_api_url";

  constructor(private http: HttpClient) {}

  uploadPhoto(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("photo", file, file.name);

    return this.http.post(this.apiUrl, formData);
  }
}
