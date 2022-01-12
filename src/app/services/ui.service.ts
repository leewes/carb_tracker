import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private user_id: number = 0;
  private subject = new Subject<any>();

  constructor() {}

  selectUser(id: number): void {
    this.user_id = id;
    this.subject.next(this.user_id);
  }

  getId(): Observable<any> {
    return this.subject.asObservable();
  }
}
