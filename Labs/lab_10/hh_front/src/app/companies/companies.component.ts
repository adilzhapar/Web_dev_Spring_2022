import { Component, OnInit } from '@angular/core';
import { Company } from '../models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[] = [];
  company!: Company;
  newCompany: string;
  newDesc: string;
  newCity: string;
  newAddress: string;

  constructor(private companyService: CompanyService) { 
    this.newCompany = "";
    this.newDesc = "";
    this.newCity = "";
    this.newAddress = "";
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe(
      (data) => {
        this.companies = data;
      }
    );
  }

  addCompany(){
    const company = {
      name: this.newCompany,
      description: this.newDesc,
      city: this.newCity,
      address: this.newAddress
    };
    this.companyService.addCompany(company as Company).subscribe(
      (company) => {
        this.companies?.unshift(company);
        this.newCompany = '';
        this.newDesc = "";
        this.newCity = "";
        this.newAddress = "";
      }
    );
  }

  deleteCompany(id: number){
    this.companies = this.companies.filter((x) => x.id !== id);
    this.companyService.deleteCompany(id);
  }

}
