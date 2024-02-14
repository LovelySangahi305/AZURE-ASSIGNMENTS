import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';
import { ProductthumbnailComponent } from '../productthumbnail/productthumbnail.component';

@Component({
  imports: [ProductthumbnailComponent,CommonModule],
  providers: [ProductService],
  standalone: true,
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
productarray:IProduct[] =[];

constructor(private ps:ProductService){

}

ngOnInit(){
  this.productarray = this.ps.getAllProducts();
}

}

