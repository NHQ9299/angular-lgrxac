import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';
import { QuanLySanPhamComponent } from '../backend/quan-ly-san-pham/quan-ly-san-pham.component';
import { EditSanPhamComponent } from '../backend/edit-san-pham/edit-san-pham.component';
import { AddSanPhamComponent } from '../backend/add-san-pham/add-san-pham.component';
import { DanhSachSanPhamComponent } from '../backend/danh-sach-san-pham/danh-sach-san-pham.component';
import { ChiTietComponent } from '../backend/chi-tiet/chi-tiet.component';
import { LoginComponent } from '../backend/login/login.component';
import { SlideComponent } from '../backend/slide/slide.component';
import { NotFoundComponent } from '../backend/not-found/not-found.component';
import { NavComponent } from '../backend/nav/nav.component';
import { FooterComponent } from '../backend/footer/footer.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, NavComponent, SlideComponent, FooterComponent, DanhSachSanPhamComponent, QuanLySanPhamComponent, NotFoundComponent, ChiTietComponent, EditSanPhamComponent, AddSanPhamComponent, LoginComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
