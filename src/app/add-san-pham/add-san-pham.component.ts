import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-add-san-pham',
  templateUrl: './add-san-pham.component.html',
  styleUrls: ['./add-san-pham.component.css']
})
export class AddSanPhamComponent implements OnInit {
    product : Product = new Product();

  constructor(
    private productSservice :ProductService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  addProduct(){
    this.productSservice.addProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("quan-ly-san-pham");
    });
  }

}