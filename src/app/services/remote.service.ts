import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http:HttpClient) { }

  getRemoteUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllCabs(){
    return this.http.get('http://localhost:3000/allcabs')
  }

  getCabById(id){
    return this.http.get('http://localhost:3000/allcabs' + '/' + id  )
  }




}
