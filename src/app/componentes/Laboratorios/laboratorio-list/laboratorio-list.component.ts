import { Component, OnInit } from '@angular/core';
import { LaboratorioService } from '../servicio/laboratorio.service';
import { ApiService } from '../../servicio/api.service';
@Component({
  selector: 'app-laboratorio-list',
  templateUrl: './laboratorio-list.component.html',
  styleUrl: './laboratorio-list.component.scss'
})
export class LaboratorioListComponent implements OnInit {

  laboratorios: any[] = [];

  constructor(private LaboratorioService: ApiService) { }

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
