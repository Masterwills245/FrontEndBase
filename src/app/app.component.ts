import { Component } from '@angular/core';
import { Mascota } from './models/mascota';
import { MascotaService } from './services/mascota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detalle_profe:Mascota = new Mascota();
  datatable:any = [];

  constructor(private mascotaService:MascotaService){

  }

  ngOnInit(): void {
    this.onDataTable();
  }

  onDataTable(){
    this.mascotaService.getDetalle_Profesor().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

  onAddMascota(detalle_profe:Mascota):void{
    this.mascotaService.addDetalle_Profe(detalle_profe).subscribe(res => {
      if(res){
        alert(`El profesor ${detalle_profe.nombres_Profe} se ha registrado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  // onUpdateMascota(mascota:Mascota):void{
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

  onDeleteMascota(cedula_Profe:string):void{
    this.mascotaService.deleteMascota(cedula_Profe).subscribe(res => {
      if(res){
        alert(`El profesor con cedula ${cedula_Profe} se ha eliminado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  onSetData(select:any){
    this.detalle_profe.cedula_Profe = select.cedula_Profe;
    this.detalle_profe.nombres_Profe = select.nombres_Profe;
    this.detalle_profe.apellidos_Profe = select.apellidos_Profe;
    this.detalle_profe.sexo_Profe = select.sexo_Profe;
    this.detalle_profe.edad_Profe = select.edad_Profe;
    this.detalle_profe.fecha_Nac_Profe = select.fecha_Nac_Profe;
    this.detalle_profe.telefono_Profe = select.telefono_Profe;
    this.detalle_profe.titulo_Academico = select.titulo_Academico;
    this.detalle_profe.nombre_Titulo_Aca = select.nombre_Titulo_Aca;
  }

  clear(){
    this.detalle_profe.cedula_Profe = "";
    this.detalle_profe.nombres_Profe = "";
    this.detalle_profe.apellidos_Profe = "";
    this.detalle_profe.sexo_Profe = "";
    this.detalle_profe.edad_Profe = 0;
    this.detalle_profe.fecha_Nac_Profe = "";
    this.detalle_profe.telefono_Profe = "";
    this.detalle_profe.titulo_Academico = "";
    this.detalle_profe.nombre_Titulo_Aca = "";
  }
}
