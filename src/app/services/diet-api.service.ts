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
}
