import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Faq {
  id?: number;
  question?: string;
  answer?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  onEntryClick = new EventEmitter();
  constructor(private http: HttpClient) {}

  getAll(): Observable<Faq[]> {
    return this.http.get<Faq[]>('http://localhost:4000/api/list');
  }

  collapseAllEntries() {
    this.onEntryClick.emit();
  }
}
