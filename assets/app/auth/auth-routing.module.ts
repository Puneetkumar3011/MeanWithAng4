import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

const APP_AUTH_ROUTES: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(APP_AUTH_ROUTES)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {}