import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
// import { getLocaleDateFormat } from '@angular/common';
// import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  
  imrd=[
    {id:1,classname:'MBA'},
    {id:2,classname:'BCA'},
    {id:3,classname:'MCA'},
    {id:4,classname:'BBA'},
  ];

  studentupdate = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required)
  })

  constructor(private router: ActivatedRoute,
    private user: UserService) { }
userdata:any;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.user.getcurrentdata(this.router.snapshot.params['id']).subscribe((result) => {
      this.userdata=result;
      console.log('result',this.userdata);
      this.studentupdate = new FormGroup({
        fname: new FormControl(this.userdata.fname),
        lname: new FormControl(this.userdata.lname ),
        mobile: new FormControl(this.userdata.mobile),
        email: new FormControl(this.userdata.email ),
        gender: new FormControl(this.userdata.gender ),
        class: new FormControl(this.userdata.class)
      })
    });
}

  

  edit() {
    console.log('item',this.studentupdate.value);
    this.user.updatedata(this.router.snapshot.params['id'],this.studentupdate.value).subscribe((result)=>{
      console.log('result');
    
    })


  }

}
