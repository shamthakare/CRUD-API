import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from '../student/user.service';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentrecordComponent } from './studentrecord/studentrecord.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    StudentinfoComponent,
    StudentUpdateComponent,
     StudentrecordComponent
  ],
  exports:[
    StudentinfoComponent,
    StudentUpdateComponent,
    StudentrecordComponent,
    
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule
    
  ],
  providers:[UserService],
})
export class StudentModule { }
