import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { TopTenComponent } from './top-ten/top-ten.component';

const routes: Routes = [
  {path: '', redirectTo: 'companies', pathMatch: 'full'},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id/vacancies', component: CompanyDetailComponent},
  {path: 'vacancies/top_ten', component: TopTenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
