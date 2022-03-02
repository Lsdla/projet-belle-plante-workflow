import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public title: string;
  public lengthListProduct!: number;

  constructor(private plantService: PlantService) {
    this.title = '🪴 La Belle Plante';

    this.plantService.subjectListProduct$.subscribe(data => {
      this.lengthListProduct = data.length;
    });
  }

  ngOnInit(): void {
    return;
  }

}
