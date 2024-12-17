import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private httpClient = inject(HttpClient);

  private baseURL = 'http://localhost:3000';

  constructor() {}

  getUsers() {
    return this.httpClient.get<Users>(`${this.baseURL}/users`);
  }
}
