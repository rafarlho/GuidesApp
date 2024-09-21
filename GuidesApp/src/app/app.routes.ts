import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home'
    },
    {
        path:'home',
        data: {
            breadcrumb: 'Home'
        },
        loadComponent: ()=> import('./core/features/entry-page/entry-page.component').then(m => m.EntryPageComponent) 
    },
    {
        path:'material',
        data: {
            breadcrum: 'Angular Material'
        },
        loadChildren: () => import('./core/features/angular-material/angular-material.routes').then(m => m.AngularMaterialRoutes)
    }

];
