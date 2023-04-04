import { Component } from '@angular/core';
import { PaisService } from '../../services/pais-serivce.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
    regiones:string[]= ['africa','americas','asia','europe','oceania'];
    paisesByRegion:Country[] = [];
    regionActiva:string = '';

    constructor(private paisService:PaisService) { }

    getClassCSS(region:string):string{
        return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
    }

    activarRegion(region:string){
        if(region === this.regionActiva) {return;}
        this.regionActiva = region;
        this.paisesByRegion = [];
        this.getPaisesPorRegion(region);
    }
    
    getPaisesPorRegion(region:string){
        this.paisService.getPaisesByRegion(region)
            .subscribe(paises=>{
                this.paisesByRegion = paises;
            }
        );
    }
}
