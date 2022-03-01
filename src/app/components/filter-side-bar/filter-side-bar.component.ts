import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import * as _ from 'underscore';
import { Options } from "@angular-slider/ngx-slider";


@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.scss']
})
export class FilterSideBarComponent implements OnInit {

  @Input() listCategoriesFilter: string[];
  @Output() range = new EventEmitter<any>();



  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([0, 100])
  });
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };
  constructor() {
    this.listCategoriesFilter = [];
   }

  ngOnInit(): void {
    console.log(this.sliderForm.value.sliderControl[0])
  }

  submitForm(): void {
    this.range.emit({
      min: this.sliderForm.value.sliderControl[0],
      max: this.sliderForm.value.sliderControl[1]
    })
  }



}
