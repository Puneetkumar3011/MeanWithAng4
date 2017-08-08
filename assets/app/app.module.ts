import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AlertModule, ModalModule, CarouselModule, TabsModule, DatepickerModule, ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { TaskComponent } from "./task/task.component";
import { TaskInputComponent } from "./task/input/task.input.component";
import { TaskListComponent } from "./task/list/task.list.component";
import { TaskService } from "./task/task.service";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header/header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { CapitalizePipe } from "./directives/capitalize.pipe";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        TaskComponent,
        TaskInputComponent,
        TaskListComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        CapitalizePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        TabsModule.forRoot(),
        DatepickerModule.forRoot(),
        ButtonsModule.forRoot()
    ],
    providers: [AuthService, ErrorService, TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {

}