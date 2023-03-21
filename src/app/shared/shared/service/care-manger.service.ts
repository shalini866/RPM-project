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



  careManger():Observable<any>{
    return this.http.get(`Clinics/Providers/List/1000254`)
  }

  displayProfile(payload:any):Observable<any>{
    return this.http.get(`Clinics/ClinicPatient/${payload.userID}/${payload.clinicID}/${payload.patientID}`);
  }
  getHeaders() {
    const userID = this.authService.profile.userID;
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('token', userID);
    return httpHeaders;
  }
 
  snapshotlist(userID:any):Observable<any>{
    return this.http.get(`Vitals/List/Top/${userID}`, { headers: this.getHeaders() })
  }

  vitalslist(payload: any):Observable<any>{
    return this.http.post(`Vitals/Search`,payload , { headers: this.getHeaders() })
  }
  alertslist(payload:any):Observable<any>{
    return this.http.get(`Alerts/List/1000254/${payload.patientID}`, { headers: this.getHeaders() })
  }
  alertlistApi(id: any):Observable<any>{
    return this.http.get(`Alerts/AlertActions/${id}`, { headers: this.getHeaders() })
  }
  assessmentlist(payload:any):Observable<any>{
    return this.http.post(`Encounters/PatientEncounters`,payload)
  }
  documentlist(payload:any):Observable<any>{
    return this.http.get(`MedicalRecords/RecordsList/${payload.userID}`)
  }
  historylist(payload:any):Observable<any>{
    return this.http.get(`Audits/GetAudits/${payload.userID}/${payload.patientID}`)
  }
  taskstartlist(data:any):Observable<any>{
    return this.http.post(`CarePlan/GetTaskForDate`,data,{ headers: this.getHeaders() })
  }
  taskcompletelist(payload:any):Observable<any>{
    return this.http.post(`CarePlan/GetCompletedTasks`,payload,{ headers: this.getHeaders() })
  }
}
 


