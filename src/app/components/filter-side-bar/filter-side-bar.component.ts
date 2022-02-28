import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'underscore';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.scss']
})
export class FilterSideBarComponent implements OnInit {

  @Input() listCategoriesFilter: string[];

  constructor() {
    this.listCategoriesFilter = [];
   }

  ngOnInit(): void {
  }

  onFormSubmit(priceForm: NgForm){
    console.log(priceForm)
  }

  public onChangeValue(eventValue: any): void {
    console.log('Event Change :', eventValue);
  }

}
