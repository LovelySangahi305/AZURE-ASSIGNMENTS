import { Injectable } from '@angular/core';
import { IProduct} from './product.model';
@Injectable({providedIn: 'root'})

export class ProductService {

  constructor() { }

  getAllProducts():IProduct[]{
    return products;
  }

  getProductById(id:number):IProduct{
   let p:IProduct | any = products.find(p => p.prodid === id)
   return p;
  }
}

const products: IProduct[] = [
  {prodid:1,pname:'pen',pprice:200},
  {prodid:2,pname:'pen',pprice:200},
  {prodid:3,pname:'pen',pprice:200},
  {prodid:4,pname:'pen',pprice:200},
  {prodid:5,pname:'pen',pprice:200},
  {prodid:6,pname:'pen',pprice:200},
  
  ]
