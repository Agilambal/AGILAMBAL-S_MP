import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './Model1/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
url:string;
patient:Patient;
patientArr:Patient[];

  constructor(private http:HttpClient) { 
    this.url="http://localhost:4091/patient";
    this.patient=new Patient();
    this.patientArr=[];
  }
  insertPatient(patient:Patient){
    this.http.post<Patient>(this.url,patient).subscribe();
    return "Patient DetailsAdded";
  }
  updatePatient(patient:Patient){
    this.http.put<Patient>(this.url+"/"+patient.id,patient).subscribe();
    return "Patient Details Updated";
  }
  deletePatient(id:number){
    this.http.delete<Patient>(this.url+"/"+id).subscribe();
    return "Patient Details Deleted";
  }
  findPatient(id:number){
    this.http.get<Patient>(this.url+"/"+id).subscribe(data=> this.patient=data);
    return this.patient;
  }
  findAllPatient(){
    this.http.get<Patient[]>(this.url).subscribe(data=>this.patientArr=data);
    return this.patientArr;
  }
}
