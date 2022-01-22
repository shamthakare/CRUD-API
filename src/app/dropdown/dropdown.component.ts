import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../student/user.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers:[UserService]
})
export class DropdownComponent implements OnInit {
  categiry:any;
  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  submitcategiry(){
    const catdata={id: 0, categiry: this.categiry,isactive:1,isdelete:0};
    this.user.getcategiry(catdata,['any']).subscribe((data)=>{
      console.log(data);
      
    })

  }
}
