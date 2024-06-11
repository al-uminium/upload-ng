import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private readonly http = inject(HttpClient);
  private readonly url: string = "http://localhost:8080/api/upload"

  convertToBlob(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        resolve(new Blob([reader.result!], { type: file.type}));
      }
      reader.onerror = (e) => {
        reject(e);
      }
    })
  }

  fileUpload(blob: Blob, fileName: string): Subscription {
    const formData = new FormData();
    formData.append('image', blob, fileName);
    return this.http.post(this.url, formData).subscribe({
      complete: () => console.info("Completed"),
      error: (e) => console.error(e)
    })
  }

  constructor() { }
}
