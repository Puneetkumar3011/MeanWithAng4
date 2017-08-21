import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AlertModule, ModalModule, CarouselModule, TabsModule, DatepickerModule, ButtonsModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from "../home/home.component";
import { HeaderComponent } from "../header/header.component";
import { ErrorComponent } from "../errors/error.component";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        TabsModule.forRoot(),
        DatepickerModule.forRoot(),
        ButtonsModule.forRoot()
    ]
})
export class CoreModule {}