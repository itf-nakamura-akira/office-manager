import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent),
    },
    {
        path: 'top',
        loadComponent: () => import('./pages/top/top.component').then((c) => c.TopComponent),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
