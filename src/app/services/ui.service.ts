import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private user_id: number = 0;
  private user = new Subject<any>();

  private showGraph: boolean = true;
  private graph = new Subject<any>();

  constructor() {}

  toggleGraph(value: boolean) {
    this.showGraph = value;
    this.graph.next(this.showGraph);
  }

  getGraph(): Observable<any> {
    return this.graph.asObservable();
  }

  selectUser(id: number): void {
    this.user_id = id;
    this.user.next(this.user_id);
  }

  getId(): Observable<any> {
    return this.user.asObservable();
  }
}
