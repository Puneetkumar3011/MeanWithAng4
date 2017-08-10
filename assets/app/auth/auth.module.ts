import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthenticationComponent } from "./authentication.component";
import { LogoutComponent } from "./logout.component";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";

@NgModule({
    declarations: [
        AuthenticationComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule{}
