import { Component, OnInit, inject } from '@angular/core';
import { UploadService } from '../../service/upload.service';
import { Subscription } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-uploadfail',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './uploadfail.component.html',
  styleUrl: './uploadfail.component.css'
})
export class UploadfailComponent{
  
}
