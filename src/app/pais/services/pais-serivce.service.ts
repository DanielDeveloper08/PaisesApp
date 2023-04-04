import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  
  get httpParams(){
    return new HttpParams()
      .set("fields","name,capital,translations,subregion,region,flags,population,cca2");
  }

  constructor(private http: HttpClient) { }

  getPaisByName(countryName:string): Observable<Country[]>{
    let url: string = `${this.apiUrl}/name/${countryName}`
    return this.http.get<Country[]>( url , {params: this.httpParams});
  }

  getPaisByCapital(capitalName:string): Observable<Country[]>{
    let url: string = `${this.apiUrl}/capital/${capitalName}`
    return this.http.get<Country[]>( url,{params: this.httpParams} );
  }

  getAllCountries(): Observable<Country[]>{
    let url: string = `${this.apiUrl}/all`
    return this.http.get<Country[]>( url,{params: this.httpParams} );
  }

  getPaisByCode(code:string): Observable<Country>{
    let url: string = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country>(url);
  }

  getPaisesByRegion(region:string):Observable<Country[]>{
    let url:string = `${this.apiUrl}/region/${region}?`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
}
