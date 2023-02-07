import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  constructor(private http: HttpClient) {}
  get_table_data() {
    return this.http.get('https://reqres.in/api/users');
  }
}
