import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Product } from '../../app/Product';
import { ProductService } from '../../app/services/product.service';
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