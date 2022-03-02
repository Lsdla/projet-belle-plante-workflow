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
  listCategories: string[] = [];
  @Output() handleCateg = new EventEmitter<Array<string>>();



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
    return;
  }

  public onChangeValue(event: Event, ): void {
    let target:any = event.target;
    console.log(target.value);
    if (target.checked){
      this.listCategories.push(target.value);
    } else {
      let index = this.listCategories.findIndex(id => id == target.value);
      //ou   let index = this.listCategoriesFilter.indexOf(value);
      this.listCategories.splice(index, 1);
    }
    console.log(this.listCategories);
    this.handleCateg.emit(this.listCategories);
  }



}
