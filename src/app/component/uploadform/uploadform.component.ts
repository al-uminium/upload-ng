import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UploadService } from '../../service/upload.service';

@Component({
  selector: 'app-uploadform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './uploadform.component.html',
  styleUrl: './uploadform.component.css'
})

export class UploadformComponent implements OnInit {
  fb!: FormGroup
  file!: File

  private readonly uploadSvc = inject(UploadService);

  ngOnInit(): void {
    this.fb = new FormGroup({
      file: new FormControl("", Validators.required)
    })
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  onSubmit(): void {
    this.uploadSvc.convertToBlob(this.file).then(
      (blob) => {
        this.uploadSvc.fileUpload(blob, this.file.name)
      }
    )
  }
}
