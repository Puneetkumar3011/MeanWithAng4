import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <span>Are you sure you want to logout: </span>
            <span>
                <button class="btn btn-danger" (click)="onLogout()">Logout</button>
            </span>
        </div>
    `
})
export class LogoutComponent {
    constructor(private authService: AuthService, private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['signin']);
    }
}