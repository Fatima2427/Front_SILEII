import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicio/api.service';  // Asegúrate de que la ruta sea correcta según tu estructura de carpetas

@Component({
  selector: 'app-tu-componente',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.scss']
})
export class convenioC implements OnInit {

  convenios: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getConvenios();
  }

  getConvenios() {
    this.apiService.getConvenios().subscribe(
      (data) => {
        this.convenios = data;
        console.log('Convenios obtenidos:', data);
      },
      (error) => {
        console.error('Error al obtener convenios:', error);
      }
    );
  }

}
