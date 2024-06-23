import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../../config_url';  // Importa la URL base desde la configuración

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {
  private apiUrl = API_BASE_URL;  // Usa la URL base importada

  constructor(private http: HttpClient) { }

  getLaboratorio() {
    return this.http.get<any[]>(this.apiUrl + 'laboratorio/');
  }

}
