import { Component } from '@angular/core';
import { Tutor } from '../../models/tutor'
import { TutorService } from '../../services/tutor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {
  tutor:Tutor = new Tutor();
  datatable:any = [];

  constructor(private tutorService:TutorService){

  }



  ngOnInit(): void {
    this.onDataTable();
  }


  onDataTable(){
    this.tutorService.getTutor().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

  onAddTutor(tutor:Tutor):void{
    this.tutorService.addTutor(tutor).subscribe(res => {
      if(res){
        alert(`El tutor ${tutor.nombres_Tutor} se ha registrado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  // onUpdateTutor(tutor:Tutor):void{
  //   this.mascotaService.updateMascota(mascota.id, mascota).subscribe(res => {
  //    if(res){
  //      alert(`La mascota número ${mascota.id} se ha modificado con exito!`);
  //      this.clear();
  //      this.onDataTable();
  //    } else {
  //      alert('Error! :(')
  //    }
  //  });
  //}

  onDeleteTutor(cedula_Tutor:string):void{
    this.tutorService.deleteTutor(cedula_Tutor).subscribe(res => {
      if(res){
        alert(`El tutor con nombre ${cedula_Tutor} se ha eliminado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  onSetData(select:any){
    this.tutor.id_Tutor = select.id_Tutor;
    this.tutor.cedula_Tutor = select.cedula_Tutor;
    this.tutor.nombres_Tutor = select.nombres_Tutor;
    this.tutor.apelidos_Tutor = select.apellidos_Tutor;
    this.tutor.telefono_Tutor = select.tutor;
  }

  clear(){
    this.tutor.id_Tutor = "";
    this.tutor.cedula_Tutor = "";
    this.tutor.nombres_Tutor = "";
    this.tutor.apelidos_Tutor = "";
    this.tutor.telefono_Tutor = "";
  }
}
