import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent), canActivate: [AuthGuard] },
    {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
    {path: 'customer', 
        canActivate: [AuthGuard],
        children: [
            {
                path: 'list',
                loadComponent: () => import('./shared/components/customer/customer-list/customer-list.component').then(m => m.CustomerListComponent)
            },
            {
                path: 'create',
                loadComponent: () => import('./shared/components/customer/customer-form/customer-form.component').then(m => m.CustomerFormComponent)
            },
            {
                path: 'edit/:id',
                loadComponent: () => import('./shared/components/customer/customer-form/customer-form.component').then(m => m.CustomerFormComponent)
            },
            {
                path: 'detail/:id',
                loadComponent: () => import('./shared/components/customer/customer-detail/customer-detail.component').then(m => m.CustomerDetailComponent)
            }
        ],
    },


];
