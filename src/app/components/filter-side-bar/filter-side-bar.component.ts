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
  @Output() outputStar = new EventEmitter<number>();
  starStates: {stateSelectedUser : boolean, stateHoverUser : boolean}[];

  constructor() {
    this.listCategoriesFilter = [];

    this.starStates = [];

    for (let index = 0; index < 5; index++) {
      this.starStates.push(
        {
          stateSelectedUser : false,
          stateHoverUser : false
        }
      );
    }


   }

  ngOnInit(): void {
  }




  onMouseOver(index: number) {
    console.log("star over", index);
    for (let i = 0; i < this.starStates.length ; i++) {
      if(i <= index) {
        this.starStates[i].stateHoverUser = true;
      } else {
        this.starStates[i].stateHoverUser = false;
      }
    }
  }

  onMouseLeave() {
    // this.starState = ['star', 'star', 'star', 'star', 'star'];
    const tempTab = [];
    for (let index = 0; index < this.starStates.length; index++) {
      tempTab.push(
        {
          stateSelectedUser : this.starStates[index].stateSelectedUser,
          stateHoverUser : this.starStates[index].stateSelectedUser
        }
      );
    }
    this.starStates = [...tempTab];
  }

  onClickStar(starIndex: number) {
    for (let i = 0; i < this.starStates.length ; i++) {
      if(i <= starIndex) {
        this.starStates[i].stateSelectedUser = true;
      } else {
        this.starStates[i].stateSelectedUser = false;
      }
   //   console.log(starIndex);
    }
    starIndex = starIndex + 1;
    this.outputStar.emit(starIndex)
  }


  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([0, 100])
  });
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };


  submitForm(): void {
    this.range.emit({
      min: this.sliderForm.value.sliderControl[0],
      max: this.sliderForm.value.sliderControl[1]
    })
  }


}
