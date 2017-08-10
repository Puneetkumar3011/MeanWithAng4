import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MessageComponent } from "./message.component";
import { MessageListComponent } from "./message-list.component";
import { MessageInputComponent } from "./message-input.component";
import { MessagesComponent } from "./messages.component";
import { MessageRoutingModule } from "./message-routing.module";

@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MessageRoutingModule
    ]
})
export class MessageModule{}
