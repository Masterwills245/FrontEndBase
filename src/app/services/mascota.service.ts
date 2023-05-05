import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Mascota } from '../models/mascota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:44358/api/Mascota";

  getDetalle_Profesor(){
    return this.http.get(this.url);
  }

  addDetalle_Profe(detalle_profe:Mascota):Observable<Mascota>{
    return this.http.post<Mascota>(this.url,detalle_profe);
  }

  updateMascota(cedula_Profe:string, detalle_profe:Mascota):Observable<Mascota>{
    return this.http.put<Mascota>(this.url + `/${cedula_Profe}`, detalle_profe);
  }

  deleteMascota(cedula_Profe:string){
    return this.http.delete(this.url + `/${cedula_Profe}`);
  }
}
