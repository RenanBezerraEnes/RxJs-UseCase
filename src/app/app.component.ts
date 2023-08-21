import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from './models/Country.Model';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countries$!: Observable<CountryModel[]>;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries$ = this.countriesService.get();
  }
}
