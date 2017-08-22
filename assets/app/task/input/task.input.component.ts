import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';
import { getTaskPriorities, TaskPriorityType } from "../../app.constants";

@Component({
  selector: 'app-task-input',
  templateUrl: './task.input.component.html'
})
export class TaskInputComponent implements OnInit, OnDestroy{
    taskPriorities : Array<TaskPriorityType> = [];
    taskData: TaskModel;
    isIdHidden: boolean = true;
    taskStatus: string = 'Pending';
    defaultStatus: string = "pending";
    private subForParam: any;
    constructor(private taskService: TaskService, private router : Router, private actRouter: ActivatedRoute) {

     }

    ngOnInit() {
      // default form setting
      this.taskPriorities = getTaskPriorities();
      this.taskData = {
          priority: this.taskPriorities[0].key,
          taskStatus: "pending",
          id: "",
          description: ""
      };
      this.subForParam = this.actRouter.params.subscribe((params) => {
        let taskId = params['id'];
        if(taskId){
          this.getTaskDetail(taskId);
        }
      });
    }

    getTaskDetail(taskId: string){
      this.taskService.getTask(taskId).subscribe((task: any) => { 
            this.taskData = task; 
            this.taskData.id = task._id;
        });
    }

    onSubmit(inputForm: NgForm){
      try
      {
        if(inputForm.value){
          let task : TaskModel = {
            id : inputForm.value.id,
            description: inputForm.value.description,
            createdOn: String(new Date()),
            taskStatus: inputForm.value.taskStatus,
            priority: inputForm.value.priority
          }
          inputForm.value.id ? this.updateTask(task) : this.addNewTask(task);
        }
      }
      catch(err){
        event.preventDefault();
        throw err;
      }
    }

    addNewTask(task: TaskModel){
      this.throwErrorTest();
      this.taskService.addTask(task).subscribe(
        (result) => {
          if(result.ok){
            this.router.navigate(['tasks']);
          }
        },
        (err) => {
          console.log(err);
        }
      )
    }

    updateTask(task: TaskModel){
      this.taskService.updateTask(task).subscribe(
        (result) => {
          if(result.ok){
            this.router.navigate(['tasks']);
          }
        },
        (err) => {
          console.log(err);
        }
      )
    }

    private throwErrorTest(){
      throw new Error('Created this error to demonstrate error handling');
    }

    cancelEdit(){
      this.router.navigate(['tasks']);
    }

    ngOnDestroy() {
      this.subForParam.unsubscribe();
    }

}