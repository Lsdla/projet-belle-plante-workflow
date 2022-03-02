import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { $ } from 'protractor';
import { Observable, Subscription } from 'rxjs';
import { PlantService } from 'src/app/services/plant.service';
import * as _ from 'underscore';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {map} from 'rxjs/operators';

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
 public products$!: Observable<Array<Product>>;

 constructor(
   private plantService: PlantService,
   private productService: ProductService
   ) {

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

 ngOnInit(): void{
   this.products$ = this.productService.getAll();
 }

  onCateg(categories: Array<string>) {
    console.log(categories);
    if (categories.length != 0){
      this.products$ = this.productService.getAll().pipe(
        map((products:Array<any>) => {
          console.log(products);
          return _.filter(products, function (product){
            let categoryLabel:any = product.product_breadcrumb_label
            return categories.includes(categoryLabel);
          })
        })
      )

    } else {
      this.products$ = this.productService.getAll();
    }
  }

 // methode de cycle de vie de mon composant qui est executée juste avant que l'instance de mon composant soit détruite
 ngOnDestroy(): void {
   this.subListProduct.unsubscribe();
 }
//test
}
