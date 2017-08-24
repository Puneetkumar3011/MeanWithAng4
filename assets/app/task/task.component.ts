import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { TaskModel } from './task.model';
import { TaskService } from './task.service';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  tasksObservable: Observable<TaskModel[]>;
  errorMsg : string;
  constructor(public taskService: TaskService, private authService: AuthService, 
  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['home']);
    }
  }

}
