import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthToken, Company, Vacancy} from './models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/login/`, {
      username,
      password
    });
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.BASE_URL}/companies/`, company);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/companies/${id}`);
  }

  getVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies/`);
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies/top_ten/`);
  }



}
