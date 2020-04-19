import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuanLySanPhamComponent } from "../backend/quan-ly-san-pham/quan-ly-san-pham.component";
import { EditSanPhamComponent } from "../backend/edit-san-pham/edit-san-pham.component";
import { AddSanPhamComponent } from "../backend/add-san-pham/add-san-pham.component";
import { LoginComponent } from "../backend/login/login.component";
import { ChiTietComponent } from "../backend/chi-tiet/chi-tiet.component";
import { DanhSachSanPhamComponent } from "../backend/danh-sach-san-pham/danh-sach-san-pham.component";
import { NotFoundComponent } from "../backend/not-found/not-found.component";
import { AdminComponent } from "../backend/admin/admin.component";

const routes: Routes = [
  { path: "", redirectTo: "danhsach", pathMatch: "full" },
  { path: "home", component: DanhSachSanPhamComponent},
  { path: "quan-ly-san-pham", component: QuanLySanPhamComponent },
  { path: "product/:productID", component: ChiTietComponent },
  { path: "product/edit/:id", component: EditSanPhamComponent },
  { path: "addSanPham", component: AddSanPhamComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component:AdminComponent,
    children:[
      {path: "", redirectTo:"danhsach", pathMatch:"full"},
      {path: "danhsach", component: DanhSachSanPhamComponent}
    ]
  },

  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
