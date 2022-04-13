import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Product} from './models';

@Injectable({
    providedIn: 'root'
})

export class ItemsService {
    BASE_URL = 'http://localhost/8000';

    constructor(private client: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.client.get<Product[]>(`${this.BASE_URL}/products`);
    }

    getProduct(id: number): Observable<any> {
        return this.client.get(`${this.BASE_URL}/products/${id}`);
    }
}