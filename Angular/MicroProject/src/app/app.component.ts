import { Component } from '@angular/core';
import { Patient } from './Model1/Patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MicroProject';
  patient:Patient;
  result:string;
  patientArr:Patient[];
  flag:boolean;

  constructor(private service:PatientService){
    this.patient=new Patient();
    this.result="";
    this.patientArr=[];
    this.flag=false;
  }
  insertPatient(data:any){
    this.patient.id=data.id;
    this.patient.patName=data.patName;
    this.patient.patAge=data.patAge;
    this.patient.patNo=data.patNo;

    this.result=this.service.insertPatient(this.patient);
  }
  updatePatient(data:any){
    this.patient.id=data.id;
    this.patient.patName=data.patName;
    this.patient.patAge=data.patAge;
    this.patient.patNo=data.patNo;
    this.result=this.service.updatePatient(this.patient);
}
deletePatient(data:any){
  this.result=this.service.deletePatient(data.id);
}
findPatient(data:any){
  this.patient=this.service.findPatient(data.id);
  this.result=this.patient.id+"-"+this.patient.patName+"-"+this.patient.patAge+"-"+this.patient.patNo;
}
findAllPatient(){
  this.patientArr=this.service.findAllPatient();
  this.flag=true;
}
}
