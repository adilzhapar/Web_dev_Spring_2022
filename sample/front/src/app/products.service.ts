import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/${id}`)
  }
}
