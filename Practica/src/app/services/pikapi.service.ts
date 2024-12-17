import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PikapiItem } from '../models/PikapiItem';
import { PikapiItems} from  '../models/PikapiItems';

@Injectable({
  providedIn: 'root'
})
export class PikapiService {

  private httpClient = inject(HttpClient);

  private baseURL = 'https://swapi.dev/api/';

  constructor() { }

  getItems() {
    return this.httpClient.get<PikapiItems>(`${this.baseURL}items`);
  }

  getItem(id: number) {
    return this.httpClient.get<PikapiItem>(`${this.baseURL}item/${id}`);
 }

}
