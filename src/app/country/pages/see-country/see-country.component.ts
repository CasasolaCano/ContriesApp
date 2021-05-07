import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators'

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-contry',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private countryService:CountryService) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    //   .subscribe(({id}) => {
        
    //     this.countryService.getCountryByAlpha(id)
    //   })


    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countryService.getCountryByAlpha(id))
      )
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
