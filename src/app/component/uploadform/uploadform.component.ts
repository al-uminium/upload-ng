import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UploadService } from '../../service/upload.service';
import { Subscription } from 'rxjs';

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
  sub$!: Subscription

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
        this.sub$ = this.uploadSvc.fileUpload(blob, this.file.name)
        this.sub$.unsubscribe
      }
    )
  }

  onSubmitWithoutBlob(): void {
    this.uploadSvc.fileUploadWithoutBlob(this.file)
                    .subscribe({
                      next: (e) => console.log(e),
                      complete: () => console.info("Completed"),
                      error: (e) => console.error(e)
                    })
  }
}
