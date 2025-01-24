import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rescatado } from './models/rescatado'; // Asegúrate de tener un modelo para "Rescatado"

@Injectable({
  providedIn: 'root'
})
export class RescatadosService {

  private url = 'http://localhost:3000/rescatados'; // URL base para las llamadas a la API

  constructor(private http: HttpClient) { }


  getRescatados(): Observable<Rescatado[]> {
    return this.http.get<Rescatado[]>(this.url);
  }

  /**
   * Obtiene un rescatado específico por su ID.
   */
  getRescatadoById(id: number): Observable<Rescatado> {
    return this.http.get<Rescatado>(`${this.url}/${id}`);
  }

  /**
   * Agrega un nuevo rescatado a la base de datos.
   */
  addRescatado(newRescatado: Rescatado): Observable<Rescatado> {
    return this.http.post<Rescatado>(this.url, newRescatado);
  }

  /**
   * Actualiza la información de un rescatado existente.
   */
  updateRescatado(id: number, updatedRescatado: Rescatado): Observable<Rescatado> {
    return this.http.put<Rescatado>(`${this.url}/${id}`, updatedRescatado);
  }

  /**
   * Elimina un rescatado de la base de datos.
   */
  deleteRescatado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
