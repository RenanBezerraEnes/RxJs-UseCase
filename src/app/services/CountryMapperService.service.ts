import { Injectable } from '@angular/core';
import { CountryResponseModel } from '../models/CountryResponseModel';
import { CountryModel } from '../models/Country.Model';

@Injectable({
  providedIn: 'root',
})
export class CountryMapperService {
  constructor() {}

  toClient(countries: CountryResponseModel[]): CountryModel[] {
    return countries.map((country) => ({
      name: country.name,
      capital: country.capital,
      code: country.alpha2Code,
    }));
  }
}
