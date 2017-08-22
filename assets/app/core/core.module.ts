import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { ErrorComponent } from "./errors/error.component";

import { AuthService } from "../auth/auth.service";
import { LogService } from "../core/errors/error.log.service";
import { GlobalErrorHandler } from "../core/errors/global_error_handller";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        ErrorComponent,
        ErrorComponent
    ],
    providers: [
        AuthService,
        LogService,
        {
        provide: ErrorHandler, 
        useClass: GlobalErrorHandler
        }
    ]
})
export class CoreModule {}