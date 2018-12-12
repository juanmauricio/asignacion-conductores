import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "/conductor";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Ocurrió un error del lado del cliente o con la red.
      console.error('Ha ocurrido un error:', error.error.message);
    } else {
      // La respuesta del servidor fue un código no exitoso.
      console.error(
        `Código error del Servidor ${error.status}, ` +
        `Error: ${error.error}`);
    }
    // devuelve un observable.
    return throwError('algo sucedió...');
  };

  private extraerDatos(res: Response) {
    let body = res;
    return body || {};
  }

  obtenerConductores(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extraerDatos),
      catchError(this.handleError));
  }

  obtenerConductor(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extraerDatos),
      catchError(this.handleError));

  }

  crearConductor(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  actualizarConductor(id: String, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  eliminarConductor(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
}
