import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UploadService } from '../../service/upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uploadsuccess',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './uploadsuccess.component.html',
  styleUrl: './uploadsuccess.component.css'
})
export class UploadsuccessComponent implements OnInit{
  private readonly uploadSvc = inject(UploadService)
  sub$!: Subscription;
  url: string = ""
  // sub$!: Subscription;

  //need to use behaviorsubject to retrieve data after it was emitted before instantiation. 
  ngOnInit(): void {
    this.sub$ = this.uploadSvc.response$.subscribe(url => this.url = "https://alzj-bucket.sgp1.digitaloceanspaces.com/"+url)
  }
}
