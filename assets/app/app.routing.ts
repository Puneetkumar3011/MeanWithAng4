import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./core/home/home.component";
import { ErrorComponent } from "./core/errors/error.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'tasks', loadChildren: "./task/task.module#TaskModule" }
];

export const routing = RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules});