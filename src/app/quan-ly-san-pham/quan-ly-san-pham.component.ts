import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Product } from "../Product";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-quan-ly-san-pham',
  templateUrl: './quan-ly-san-pham.component.html',
  styleUrls: ['./quan-ly-san-pham.component.css']
})
export class QuanLySanPhamComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct()
  }

  getProduct(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  }

    removeItem(id) {
      this.productService.removeProduct(id).subscribe(response => {
        this.products = this.products.filter(product => product.id != response.id);
      });
  }
}