import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {
  // @Input() plant: any;
  public plant!: any;

  constructor(
    private plantService: PlantService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const product_id:any = this.route.snapshot.paramMap.get("product_id");
    console.log(product_id);
    this.plantService.getById(product_id)
      .subscribe((data:any) => {
        console.log(data);
        this.plant = data[0];
        console.log(this.plant)
      });
  }

}
