import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../auth/auth.service";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent implements OnInit{
    @Input() message: Message;

    constructor(private messageService: MessageService, private authService : AuthService,
    private router: Router) {}

    ngOnInit() {
        if(!this.authService.isLoggedIn()){
        this.router.navigate(['home']);
        }
    }

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }
}