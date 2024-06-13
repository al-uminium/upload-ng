import { Routes } from '@angular/router';
import { UploadformComponent } from './component/uploadform/uploadform.component';
import { UploadsuccessComponent } from './component/uploadsuccess/uploadsuccess.component';
import { UploadfailComponent } from './component/uploadfail/uploadfail.component';

export const routes: Routes = [
  {path: "", component: UploadformComponent},
  {path: "upload/success", component: UploadsuccessComponent},
  {path: "upload/fail", component: UploadfailComponent},
];
