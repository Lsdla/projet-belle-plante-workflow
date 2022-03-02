import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { $ } from 'protractor';
import { Observable, Subscription } from 'rxjs';
import { PlantService } from 'src/app/services/plant.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements  OnDestroy {
 // private data!: any[]; same as below
 private data: any[] | undefined;
 private dataPlant: any[] | undefined;
 public listCategories!: string[];
 private subListProduct: Subscription;
 public listProduct!: any[];
 searchText:string;

 constructor(private plantService: PlantService) {
   this.subListProduct = this.plantService.subjectListProduct$.subscribe(response => {
     console.log(response);
     this.data = response;
     this.listCategories = _.uniq(this.data.map(x => x.product_breadcrumb_label));
     console.log(this.listCategories);

     response.length = 40; // juste pour le dev dans notre contexte d'apprentissage
     this.listProduct = [...response];
    //  this.data.sort(function (a, b) {
    //   return a.localeCompare(b);
    // });
  });

  //  this.data.sort(function (a, b) {
  //   return a.localeCompare(b);
  //   using String.prototype.localCompare()
  // });

   this.plantService.getListProductsChaud();
 }



//  var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
// items.sort(function (a, b) {
//   return a.localeCompare(b); //using String.prototype.localCompare()
// });
//  ngOnInit(): void {

//  }

  // search(event:any) {//autre methode search
  //   this.subListProduct = this.plantService.getListProducts().subscribe(resp => {
  //     this.listProduct = resp.filter(x => x.product_name.includes(event.value));
  //   })
  // }

 // methode de cycle de vie de mon composant qui est executée juste avant que l'instance de mon composant soit détruite

 ngOnDestroy(): void {
   this.subListProduct.unsubscribe();
 }

}
