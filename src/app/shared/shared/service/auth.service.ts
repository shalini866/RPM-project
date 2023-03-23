import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  get: any;
  profile: any;

  isLoggedIn(){
    !!sessionStorage.getItem('token')
  }

  constructor(private http: HttpClient) { } 


  login(payload: any): Observable<any> {
    return this.http.post(`Email/SignIn`, payload)
  }
  getProfiles(userId: any): Observable<any> {
    return this.http.get(`Profile/${userId}`).pipe(
      tap((res: any) => {
        this.profile = res;
        console.log('DFCVGHBJN************',res);
        
      }) 
    )
  }
  search(payload: any): Observable<any> {
    return this.http.post(`Clinics/SearchPatients2`, payload)
  }
} 

