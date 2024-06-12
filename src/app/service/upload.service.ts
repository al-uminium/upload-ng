import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private readonly http = inject(HttpClient);
  private readonly url: string = "http://localhost:8080/api/upload"
  response = new Subject<any>;
  response$ = this.response.asObservable();

  convertToBlob(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        console.log("Loaded and ready to blob");
        console.log(reader.result);
        resolve(new Blob([reader.result!], { type: file.type}));
      }
      reader.onerror = (e) => {
        reject(e);
      }
    })
  }

  // This sends as a multipart form to spring backend, even though it was converted into a blob. 
  // So now idk if it's even worth converting it into a blob in the first place.
  fileUpload(blob: Blob, fileName: string): Subscription {
    const formData = new FormData();
    formData.append('image', blob);
    formData.append('fileName', fileName);
    return this.http.post(this.url, formData).subscribe({
      complete: () => console.info("Completed"),
      error: (e) => console.error(e)
    })
  }

  // so I don't need to send it as a blob lol.
  fileUploadWithoutBlob(file: File) {
    const formData = new FormData();
    console.log(file.name);
    formData.append('image', file);
    formData.append('fileName', file.name);
    return this.http.post(this.url, formData, {responseType: 'text'})
  }
}
