import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Accessory } from '../../Models/accessory.model'; // Adjust the path as needed
import { environment } from '../../Environments/environment'; // Adjust based on your environment setup

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {
  private apiUrl = `${environment.apiUrl}/api/accessories`; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  getAllAccessories(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getAccessoryById(id: number): Observable<Accessory> {
    return this.http.get<Accessory>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createAccessory(accessory: Accessory): Observable<Accessory> {
    return this.http.post<Accessory>(this.apiUrl, accessory).pipe(
      catchError(this.handleError)
    );
  }

  updateAccessory(id: number, accessory: Accessory): Observable<Accessory> {
    return this.http.put<Accessory>(`${this.apiUrl}/${id}`, accessory).pipe(
      catchError(this.handleError)
    );
  }

  deleteAccessory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
