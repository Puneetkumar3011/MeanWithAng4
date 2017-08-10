import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages.component";

const APP_Message_ROUTES: Routes = [
        { path: 'messages', component: MessagesComponent }
    ];

@NgModule({
    imports: [
        RouterModule.forChild(APP_Message_ROUTES)
    ],
    exports: [RouterModule]

})
export class MessageRoutingModule{

}