import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
//import { MessageModule } from "./messages/message.module";
import { SharedAppModule } from "./shared.module";
import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        CoreModule,
        AuthModule,
        //MessageModule,
        SharedAppModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}