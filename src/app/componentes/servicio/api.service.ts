import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000/sileii_services/';  // Cambia según la URL de tu API Django

  constructor(private http: HttpClient) { }

  getConvenios() {
    return this.http.get<any[]>(this.apiUrl + 'convenio/');
  }
  getLaboratorio() {
    return this.http.get<any[]>(this.apiUrl + 'laboratorio/');
  }

}
