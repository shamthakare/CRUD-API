import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import { NgSelectComponent } from '@ng-select/ng-select';


@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {
  data: any;
    studentinfo = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required)
  })

  constructor(private user: UserService) { }
  alert:boolean=false;

  collection = {};
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.user.getdata().subscribe((res) => {
      this.data = res
      console.log('ffff,',this.data);
      
    });
  }
  submit() {
    console.log('data ',this.studentinfo.value);
    
    this.user.postdata(this.studentinfo.value).subscribe((res) => {
      this.alert=true
    });
    this.studentinfo.reset({})
    this.getAllData()
  }
  del(item: any) {
    this.user.deletedata(item).subscribe((result) => {
      this.getAllData()
    })
  }
  closeAlert(){
    this.alert=false
  }
  edit(id:any){}
}


