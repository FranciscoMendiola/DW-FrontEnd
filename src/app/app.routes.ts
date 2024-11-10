import { Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/component/login/login.component';
import { RegisterComponent } from './modules/auth/component/register/register.component';
import { SecuredComponent } from './modules/auth/component/secured/secured.component';
import { CategoryComponent } from './modules/product/component/category/category.component';
import { ProductComponent } from './modules/product/component/product/product.component';
import { authenticationGuard } from './modules/auth/_guard/authentication.guard';
import { HomeComponent } from './modules/home/home.component';
import { ProductDetailsComponent } from './modules/product/component/product-details/product-details.component';
import { CustomerComponent } from './modules/customer/component/customer/customer.component';
import { RegionComponent } from './modules/customer/component/region/region.component';
import { InvoiceComponent } from './modules/invoice/component/invoice/invoice.component';
import { CustomerDetailsComponent } from './modules/customer/component/customer-details/customer-details.component';
import { ProductByCategoryComponent } from './modules/product/component/product-by-category/product-by-category.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'product/:gtin',
        component: ProductDetailsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'secured',
        component: SecuredComponent,
        canActivate: [authenticationGuard]
    },

    {
        path: 'invoice',
        component: InvoiceComponent,
    },
    {
        path: 'customer',
        component: CustomerComponent
    },

    {
        path: 'customer/:rfc',
        component: CustomerDetailsComponent
    },


    {
        path: 'products/:category/:category_id',
        component: ProductByCategoryComponent
    },



    {
        path: 'region',
        component: RegionComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
];
