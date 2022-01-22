import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StudentModule } from './student/student.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentModule } from './student/student.module';




@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StudentModule,
    FormsModule,
    HttpClientModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
