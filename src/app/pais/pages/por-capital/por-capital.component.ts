import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais-serivce.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  hasError: boolean = false;
  countries: Country[] = []
  termino: string = '';

  constructor(private paisService: PaisService) {
  }

  ngOnInit() {
    this.getAllContries()
  }


  onSubmit(filterData: any) {
    this.termino = filterData;
    this.hasError = false;
    if (filterData != "") {
      this.paisService.getPaisByCapital(filterData)
        .subscribe({
          next: (paises) => {
            this.countries = paises
          }, error: (err) => {
            this.hasError = true
          }
        });
    }
  }

  getAllContries() {
    this.paisService.getAllCountries().subscribe(resp => {
      this.countries = resp.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common));
    });
  }
}
