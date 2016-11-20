import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CrimeStatsComponent } from './crime-stats/crime-stats.component';

const appRoutes: Routes = [
    {
        path: 'home',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'crime-stats',
        component: CrimeStatsComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);