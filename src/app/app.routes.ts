import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {

        path: 'about',
        component: AboutComponent

    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
