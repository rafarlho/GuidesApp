import { Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material.component';

export const AngularMaterialRoutes: Routes = [
    {
        path: '', pathMatch: 'full', component: AngularMaterialComponent
    },
    {
        path:'custom-theme',
        data: {
            breadcrum: "Custom theme"
        },
        loadComponent: ()=> import('./create-custom-theme/create-custom-theme.component').then(m => m.CreateCustomThemeComponent) 
    }

];
