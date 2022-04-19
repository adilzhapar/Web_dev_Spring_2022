import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { CompanyService } from '../company.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private location: Location, 
              private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getTopTen();
  }

  getTopTen() {
    this.companyService.getTopTen().subscribe(
      (data) => {
        this.vacancies = data;
      }
    );
  }

  goBack(){
    this.location.back();
  }

}
