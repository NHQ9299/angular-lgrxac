import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './nav/nav.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductService } from './services/product.service';

import { QuanLySanPhamComponent } from '../backend/quan-ly-san-pham/quan-ly-san-pham.component';
import { EditSanPhamComponent } from '../backend/edit-san-pham/edit-san-pham.component';
import { AddSanPhamComponent } from '../backend/add-san-pham/add-san-pham.component';
import { DanhSachSanPhamComponent } from '../backend/danh-sach-san-pham/danh-sach-san-pham.component';
import { ChiTietComponent } from '../backend/chi-tiet/chi-tiet.component';
import { LoginComponent } from '../backend/login/login.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, NavComponent, SlideComponent, FooterComponent, DanhSachSanPhamComponent, QuanLySanPhamComponent, NotFoundComponent, ChiTietComponent, EditSanPhamComponent, AddSanPhamComponent, LoginComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
