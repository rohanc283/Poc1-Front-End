import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8000/";
  constructor(private httpClient: HttpClient) { }
  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}allusers`)
  }

  addUsers(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}add/users`, user);
  }
  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}delete/users/${id}`);
  }
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}user/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}update/users/${id}`, user);
  }
}
