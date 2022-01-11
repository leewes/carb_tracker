import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DietApiService {
  url: string = 'http://localhost:3000/api/meals'
 
  constructor(private http:HttpClient) { }

  getMeals(): Observable<any> {
    const header = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    return this.http.get(this.url, {'headers': header})
  }
}
