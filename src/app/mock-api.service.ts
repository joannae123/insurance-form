import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor(private http: HttpClient) {}

  // Fetch insurance types from the mock data
  getInsuranceTypes(): Observable<any> {
    return this.http.get<any>('/assets/data.json');
  }
}

