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

  suggestedCountries: Country[] = [];

  placeholder:string = 'Buscar pais...';


  search(term: string) {

    this.haveError = false;
    this.term = term;

    this.countryService.searchCountry(term)
      .subscribe((resp) => {
        console.log(resp);
        this.countries = resp;
      }, (err) => {
        this.haveError = true;
        this.countries = [];
      });
  }

  suggestions(term: string) {
    this.haveError = false;

    this.countryService.searchCountry(term)
      .subscribe( 
        countries => this.suggestedCountries = countries.splice(0,3),
        (err) => this.suggestedCountries = []
      );
    //TODO: Crear sugerencias
  }

}
