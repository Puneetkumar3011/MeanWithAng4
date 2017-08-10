import { Routes, RouterModule } from "@angular/router";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);