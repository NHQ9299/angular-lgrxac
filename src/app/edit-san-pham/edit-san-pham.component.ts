import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-edit-san-pham',
  templateUrl: './edit-san-pham.component.html',
  styleUrls: ['./edit-san-pham.component.css']
})
export class EditSanPhamComponent implements OnInit {
  product : Product
  constructor(
    private productService : ProductService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.editProduct();
  }

  editProduct(){
 this.activatedRoute.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data =>{
      this.product= data;
    })
  });
}
 updateProduct(){
    this.productService.updateProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl('danhsach');
    });
  }
}