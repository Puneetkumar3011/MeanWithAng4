import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AlertModule, ModalModule, CarouselModule, TabsModule, DatepickerModule, ButtonsModule } from 'ngx-bootstrap';

import { TaskComponent } from "./task.component";
import { TaskInputComponent } from "./input/task.input.component";
import { TaskListComponent } from "./list/task.list.component";
import { TaskRoutingModule } from "./task-routing.module";
import { SharedAppModule } from "../shared.module";

import { TaskService } from "./task.service";

@NgModule({
    declarations: [
        TaskComponent,
        TaskInputComponent,
        TaskListComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        TaskRoutingModule,
        SharedAppModule,
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        TabsModule.forRoot(),
        DatepickerModule.forRoot(),
        ButtonsModule.forRoot()
    ],
    providers: [TaskService]
})
export class TaskModule {}