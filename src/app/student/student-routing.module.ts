import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { StudentrecordComponent } from './studentrecord/studentrecord.component';

const routes: Routes = [
  {path:'studentinfo',component:StudentinfoComponent},
  {path:'studentupdate/:id',component:StudentUpdateComponent},
  {path:'studentrecord',component:StudentrecordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
