import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CareMangerService {

  constructor(
    private http:HttpClient,
    private authService : AuthService) { 
    
  }

  getHeaders() {
    const userID = this.authService.profile.userID;
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('token', userID);
    return httpHeaders;
  }

  careManger():Observable<any>{
    return this.http.get(`Clinics/Providers/List/1000254`)
  }

  displayProfile(payload:any):Observable<any>{
    return this.http.get(`Clinics/ClinicPatient/${payload.userID}/${payload.clinicID}/${payload.patientID}`);
  }

  snapshotlist(payload:any):Observable<any>{
    return this.http.get(`Vitals/List/Top/${payload.userID}`)
  }

  vitalslist(payload: any):Observable<any>{
    return this.http.post(`Vitals/Search`,payload , { headers: this.getHeaders() })
  }
}
 
 
  