import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.route.paramMap.subscribe(
      (params) => {
        const id = parseInt(params.get('id') || '{}');
        this.companyService.getVacancies(id).subscribe(
          (vacancies) => {
            this.vacancies = vacancies;
          }
        );
      }
    );
  }

  goBack(){
    this.location.back();
  }
}
