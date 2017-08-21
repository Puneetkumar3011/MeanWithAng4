import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { MessageModule } from "./messages/message.module";
import { SharedAppModule } from "./shared.module";
import { routing } from "./app.routing";
import { HeaderComponent } from "./header/header.component";
import { ErrorComponent } from "./errors/error.component";
import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";

import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        AuthModule,
        MessageModule,
        SharedAppModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}