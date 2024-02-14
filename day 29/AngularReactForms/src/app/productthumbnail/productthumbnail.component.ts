import { Component, Input } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-productthumbnail',
  standalone: true,
  imports: [],
  templateUrl: './productthumbnail.component.html',
  styleUrl: './productthumbnail.component.css'
})
export class ProductthumbnailComponent {
  @Input() product:IProduct|any;
}

