import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Rescatado } from './models/rescatado'; // Asegúrate de tener un modelo para "Rescatado"

@Injectable({
  providedIn: 'root'
})
export class RescatadosService {

  private url = 'http://localhost:3000/rescatados'; // URL base para las llamadas a la API

  constructor(private http: HttpClient) { }

  getRescatados(): Observable<Rescatado[]> {
    return this.http.get<Rescatado[]>(this.url).pipe(
      catchError((error) => {
        console.error('Error al obtener los rescatados:', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }

  /**
   * Obtiene un rescatado específico por su ID.
   */
  getRescatadoById(id: number): Observable<Rescatado> {
    return this.http.get<Rescatado>(`${this.url}/${id}`).pipe(
      map(rescatado => rescatado || this.resetFormulario()), // Devuelve un objeto vacío si no se encuentra el rescatado
      catchError((error) => {
        console.error(`Error al obtener el rescatado con ID ${id}:`, error);
        return of(this.resetFormulario()); // Devuelve un rescatado vacío en caso de error
      })
    );
  }

  /**
   * Agrega un nuevo rescatado a la base de datos.
   */
  addRescatado(newRescatado: Rescatado): Observable<Rescatado> {
    return this.http.post<Rescatado>(this.url, newRescatado).pipe(
      catchError((error) => {
        console.error('Error al agregar un nuevo rescatado:', error);
        return of(this.resetFormulario()); // Devuelve un rescatado vacío en caso de error
      })
    );
  }

  /**
   * Actualiza la información de un rescatado existente.
   */
  updateRescatado(id: String, updatedRescatado: Rescatado): Observable<Rescatado> {
    return this.http.put<Rescatado>(`${this.url}/${id}`, updatedRescatado).pipe(
      catchError((error) => {
        console.error(`Error al actualizar el rescatado con ID ${id}:`, error);
        return of(this.resetFormulario()); // Devuelve un rescatado vacío en caso de error
      })
    );
  }

  /**
   * Elimina un rescatado de la base de datos.
   */
  deleteRescatado(id: String): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((error) => {
        console.error(`Error al eliminar el rescatado con ID ${id}:`, error);
        return of(); // Devuelve void (sin valor) en caso de error
      })
    );
  }

  /**
   * Método para devolver un objeto `Rescatado` vacío por defecto.
   */
  private resetFormulario(): Rescatado {
    return {
      id: "",
      nombre: '',
      foto: '',
      edad: 0,
      sexo: '',
      procedencia: '',
      valoracion_medica: '',
      medico_id: 0,
      rescate_id: 0,
      created_at: '',
      updated_at: ''
    };
  }
}
