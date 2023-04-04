import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import {  debounceTime } from 'rxjs';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.css']
})
export class FilterInputComponent {
   @Input () placeholder: string = "Buscar..";
   @Output() onEnter: EventEmitter<string> = new EventEmitter();
   @Output() debounce: EventEmitter<string> = new EventEmitter();

   filter: FormControl = new FormControl();


   termino: string = ""


   ngOnInit(){
      this.filter.valueChanges
      .pipe(debounceTime(500))  
      .subscribe( dataFilter =>{
        console.log(  "info", dataFilter )
        this.onEnter.emit(dataFilter)
      })
   }

   onSubmit(){
   
   }

   onDebounce(){
    
   }
}
