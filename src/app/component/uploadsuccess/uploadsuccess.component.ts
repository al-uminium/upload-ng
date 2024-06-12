import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { UploadService } from '../../service/upload.service';

@Component({
  selector: 'app-uploadsuccess',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './uploadsuccess.component.html',
  styleUrl: './uploadsuccess.component.css'
})
export class UploadsuccessComponent implements OnInit{
  private readonly uploadSvc = inject(UploadService)
  sub$!: Subscription
  url: string = ""

  // this.url gets "resolved" after oninit, so it doesn't update
  // solution: wait for event to be emitted before rendering this. 
  // need to use a guard?
  ngOnInit(): void {
    this.sub$ = this.uploadSvc.response$.subscribe((url: string) => {
      this.url = "https://alzj-bucket.sgp1.digitaloceanspaces.com/" + url;
    })
  }
}
