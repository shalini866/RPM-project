import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get: any;
  profile: any;


  constructor(private http: HttpClient) { }
  login(payload: any): Observable<any> {
    return this.http.post(`Email/SignIn`, payload)
  }
  getProfiles(id: any): Observable<any> {
    return this.http.get(`Profile/${id}`).pipe(
      tap((res: any) => {
        this.profile = res;
      })
    )
  }
  search(payload: any): Observable<any> {
    return this.http.post(`Clinics/SearchPatients2`, payload)
  }
} 

