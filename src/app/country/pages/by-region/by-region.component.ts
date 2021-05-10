import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  countries:Country[] = [];

  activeRegion: string = '';
  haveError:boolean = false;

  constructor(private countryService:CountryService) { }

  activateRegion (region:string) {
    this.activeRegion = region;
  }

  getClassCSS(region: string) {
    return (region === this.activeRegion) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  search() {


    this.countryService.searchCountriesByRegion(this.activeRegion)
      .subscribe((resp) => {
        this.countries = resp;
      }, (err) => {
        this.haveError = true;
        this.countries = [];
      })
  }

}
