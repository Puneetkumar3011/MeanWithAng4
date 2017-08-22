import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { LogService } from "../core/errors/error.log.service";
import { } from "../core/errors"
import { getServiceBaseUrl } from "../app.constants";

@Injectable()
export class AuthService {
    baseUrl: string = getServiceBaseUrl();
    constructor(private http: Http, private logService: LogService) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${this.baseUrl}/user`, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.logService.logError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${this.baseUrl}/user/signin`, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.logService.logError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}