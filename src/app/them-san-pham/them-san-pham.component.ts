import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { ProductService} from '../services/product.service';

@Component({
  selector: 'app-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrls: ['./them-san-pham.component.css']
})
export class ThemSanPhamComponent implements OnInit {
    product : Product = new Product();

  constructor(
    private router :Router,
    private productService : ProductService 
  ) { }

  ngOnInit() {

  }
    addProduct(){
      this.productService.addProduct(this.product).subscribe(data => {
        this.router.navigateByUrl('quan-ly-san-pham');
      })
    }
}