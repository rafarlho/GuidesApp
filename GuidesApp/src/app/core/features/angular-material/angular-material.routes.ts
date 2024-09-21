import { Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material.component';

export const AngularMaterialRoutes: Routes = [
    {
        path: '', pathMatch: 'full', component: AngularMaterialComponent
    },
    {
        path:'costumTheme',
        data: {
            breadcrum: "Costum theme"
        },
        loadComponent: ()=> import('./create-custom-theme/create-custom-theme.component').then(m => m.CreateCustomThemeComponent) 
    }

];
