import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  term:string = '';
  haveError:boolean = false;
  countries:Country[] = [];

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
  }


  search(term:string) {

    this.haveError = false;
    this.term = term;

    this.countryService.searchCountryByCapital(term)
      .subscribe((resp) => {
        this.countries = resp;
      }, (err) =>{
        this.haveError = true;
        this.countries = [];
      })
  }

  suggestions() {
    this.haveError = false;
  }

}
