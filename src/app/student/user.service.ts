import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get(this.baseurl);

  }
  postdata(data: any) {
    return this.http.post(this.baseurl, data);
  }

  deletedata(id: any) {
    return this.http.delete(`${this.baseurl}${id}`)
  }


  getcurrentdata(id: any) {
    return this.http.get(`${this.baseurl}${id}`)
  }
  updatedata(id: any, data: any) {
    return this.http.put(`${this.baseurl}${id}`, data)

  }

  getcategiry(id: any, data: any) {
    return this.http.get(this.baseurl, data);
  }
}
