import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UploadformComponent } from './component/uploadform/uploadform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadformComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upload';
}
