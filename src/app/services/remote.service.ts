import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http: HttpClient) { 
    console.log(environment.apiurl);
  }

  getRemoteUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAllCabs() {
    return this.http.get('http://localhost:3000/allcabs');
  }

  getCabById(id) {
    return this.http.get('http://localhost:3000/allcabs' + '/' + id  );
  }

  addCab(cab) {
    return this.http.post('http://localhost:3000/allcabs', cab);

  }

  deleteCab(id) {
    return this.http.delete('http://localhost:3000/allcabs' + '/' + id);
  }

  updateCab(id, cab) {
    return this.http.put('http://localhost:3000/allcabs' + '/' + id, cab);
  }



}
