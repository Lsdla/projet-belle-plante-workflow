import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { $ } from 'protractor';
import { Observable, Subject, Subscription } from 'rxjs';
import { PlantService } from 'src/app/services/plant.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit, OnDestroy {
 // private data!: any[]; same as below
 private data: any[] | undefined;
 public listCategories!: string[];
 private subListProduct: Subscription;
 public listProduct!: any[];
 min;
 max;
 subject$ = new Subject();

 constructor(private plantService: PlantService) {

   this.subListProduct = this.plantService.subjectListProduct$.subscribe(response => {
     console.log(response);
     this.data = response;
     this.listCategories = _.uniq(this.data.map(x => x.product_breadcrumb_label));
     console.log(this.listCategories);
     response.length = 40; // juste pour le dev dans notre contexte d'apprentissage
     this.listProduct = [...response];
   });

   this.plantService.getListProductsChaud();
 }

 ngOnInit(): void {
 }

 minItem(newItem: any) {
  this.min = newItem;
  console.log(newItem)

  this.subListProduct = this.plantService.subjectListProduct$.subscribe(response => {
    this.listProduct = response.filter(product =>
      product.product_unitprice_ati >= newItem.min && product.product_unitprice_ati <= newItem.max);
  });
  this.plantService.getListProductsChaud();
}

 ngOnDestroy(): void {
   this.subListProduct.unsubscribe();
 }

}
