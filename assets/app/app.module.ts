import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { TaskModule } from "./task/task.module";
import { TaskService } from "./task/task.service";
import { HeaderComponent } from "./header/header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { SharedAppModule } from "./shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        AuthModule,
        SharedAppModule,
        TaskModule
    ],
    providers: [AuthService, ErrorService, TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {

}