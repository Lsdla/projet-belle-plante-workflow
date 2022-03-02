import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.scss']
})
export class CardPlantComponent implements OnInit {

  @Input() plant: any;
  constructor() {
   }

  ngOnInit(): void {
    return;
  }

}
