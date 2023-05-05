import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Tutor } from '../models/tutor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:44358/api/Tutor";

  getTutor(){
    return this.http.get(this.url);
  }

  addTutor(tutor:Tutor):Observable<Tutor>{
    return this.http.post<Tutor>(this.url,tutor);
  }

  updateTutor(cedula_Tutor:string, tutor:Tutor):Observable<Tutor>{
    return this.http.put<Tutor>(this.url + `/${cedula_Tutor}`, tutor);
  }

  deleteTutor(cedula_Tutor:string){
    return this.http.delete(this.url + `/${cedula_Tutor}`);
  }
}
