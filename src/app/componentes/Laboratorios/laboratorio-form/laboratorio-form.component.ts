import { Component, OnInit } from '@angular/core';
import { LaboratorioService } from '../servicio/laboratorio.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio-form.component.html',
  styleUrls: ['./laboratorio-form.component.scss']
})
export class LaboratorioFormComponente implements OnInit {

  laboratorios: any[] = [];

  constructor(private LaboratorioService: LaboratorioService) { }

  ngOnInit(): void {
    this.getLaboratorios();
  }

  getLaboratorios() {
    this.LaboratorioService.getLaboratorio().subscribe(
      (data) => {
        this.laboratorios = data;
        console.log('Datos de laboratorios:', data);  // Muestra los datos en la consola
      },
      (error) => {
        console.error('Error al obtener laboratorios:', error);
      }
    );
  }
}
