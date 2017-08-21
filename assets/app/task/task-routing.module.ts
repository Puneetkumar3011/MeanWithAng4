import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { TaskComponent } from './task.component';
import { TaskInputComponent } from './input/task.input.component';
import { TaskListComponent } from './list/task.list.component';


const APP_TASK_ROUTES: Routes = [
    { path: '', component: TaskComponent, children: [
    { path: '', component: TaskListComponent },
    { path: 'list', component: TaskListComponent },
    { path: 'input', component: TaskInputComponent },
    { path: 'input/:id', component: TaskInputComponent }
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(APP_TASK_ROUTES)
    ],
    exports: [RouterModule]
})
export class TaskRoutingModule {}
