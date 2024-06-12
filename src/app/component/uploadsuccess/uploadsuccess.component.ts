import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UploadService } from '../../service/upload.service';
import { Subscription } from 'rxjs';

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
  url: string = "https://alzj-bucket.sgp1.digitaloceanspaces.com/"

  ngOnInit(): void {
    this.sub$ = this.uploadSvc.response$.subscribe(e => {
      this.url = this.url + e
      console.log("in success page", this.url);
    });
  }
}
