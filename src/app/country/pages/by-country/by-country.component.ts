import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  constructor(private countryService:CountryService) { }

  term:string = '';
  haveError: boolean = false;
  countries: Country[] = [];


  search() {
    this.haveError = false;
    console.log(this.term);

    this.countryService.searchCountry(this.term)
      .subscribe((resp) => {
        console.log(resp);
        this.countries = resp;
      }, (err) => {
        this.haveError = true;
        this.countries = [];
      });
  }

}
