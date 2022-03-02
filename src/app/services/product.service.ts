import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public apiUrl = `${environment.baseUrlApi}`
  public subjectListProducts$ = new BehaviorSubject<Array<any>>([]);
  constructor(private http: HttpClient) {
    this.http.get<Array<any>>(`${this.apiUrl}/list_products`).subscribe(products => {
      let shuffledArray = products.sort((a: any, b: any) => 0.5 - Math.random());
      this.subjectListProducts$.next(shuffledArray);
    });
  }

  getAll(): Observable<Array<any>> {
    return this.subjectListProducts$;
  }
}
