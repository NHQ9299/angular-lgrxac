import { Component, OnInit } from '@angular/core';
import { Product } from '../../app/Product';
import { ProductService } from '../../app/services/product.service';

@Component({
  selector: 'app-danh-sach-san-pham',
  templateUrl: './danh-sach-san-pham.component.html',
  styleUrls: ['./danh-sach-san-pham.component.css']
})
export class DanhSachSanPhamComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  }
  
}