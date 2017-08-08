import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { TaskComponent } from "./task/task.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { LogoutComponent } from "./auth/logout.component";
import { APP_TASK_ROUTES } from "./task/task.routing";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'tasks', component: TaskComponent, children: APP_TASK_ROUTES },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);