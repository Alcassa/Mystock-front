import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { AddingProductComponent } from './components/adding-product/adding-product.component';
import { WithDrawProductComponent } from './components/with-draw-product/with-draw-product.component';
import { ReportComponent } from './components/report/report.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'home/saldo',component:ViewProductComponent},
    {path:'home/cadastro',component:CreateProductComponent},
    {path:'home/adicionar',component:AddingProductComponent},
    {path:'home/retirar',component:WithDrawProductComponent},
    {path:'home/relatorio',component:ReportComponent}
];