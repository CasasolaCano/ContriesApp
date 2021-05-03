import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeContryComponent } from './pages/see-contry/see-contry.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    SeeContryComponent],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    SeeContryComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountryModule { }
