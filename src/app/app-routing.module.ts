import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachSanPhamComponent } from './danh-sach-san-pham/danh-sach-san-pham.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { EditSanPhamComponent } from './edit-san-pham/edit-san-pham.component';

const routes: Routes = [
  {path : '', redirectTo: 'danhsach', pathMatch: 'full' },
  {path :'danhsach', component :DanhSachSanPhamComponent},
  {path :'quan-ly-san-pham', component : QuanLySanPhamComponent},
  { path: "product/:productID", component: ChiTietComponent },
  { path: "product/edit/:id", component: EditSanPhamComponent },

  { path: "404", component: NotFoundComponent},
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }