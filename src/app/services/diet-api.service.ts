import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DietApiService {
  url: string = 'http://localhost:3000/api/';
  header = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {}

  getResource(resource: string): Observable<any> {
    return this.http.get(this.url + resource, { headers: this.header });
  }
  postResource(resource: string, data: any): Observable<any> {
    return this.http.post(this.url + resource, data, { headers: this.header });
  }
  updateResource(resource: string, data: any, id: number): Observable<any> {
    return this.http.put(`${this.url + resource}/${id}`, data, {
      headers: this.header,
    });
  }
  deleteResource(resource: string, id: number): Observable<any> {
    return this.http.delete(`${this.url + resource}/${id}`, {
      headers: this.header,
    });
  }
}
