import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from "../components/tasks/task1/task1.component";
import { Task2Component } from "../components/tasks/task2/task2.component";
import { Task3Component } from "../components/tasks/task3/task3.component";
import {StartPageComponent} from "../components/start-page/start-page.component";
import {Task4Component} from "../components/tasks/task4/task4.component";
import {Task5Component} from "../components/tasks/task5/task5.component";
import {Task6Component} from "../components/tasks/task6/task6.component";
import {Task7Component} from "../components/tasks/task7/task7.component";
import {Task8Component} from "../components/tasks/task8/task8.component";
import {Task9Component} from "../components/tasks/task9/task9.component";
import {FinishPageComponent} from "../components/finish-page/finish-page.component";
import {Task10Component} from "../components/tasks/task10/task10.component";

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
  { path: 'task4', component: Task4Component },
  { path: '15264', component: Task5Component },
  { path: 'task6', component: Task6Component },
  { path: 'task7', component: Task7Component },
  { path: 'task8', component: Task8Component },
  { path: 'task9', component: Task9Component },
  { path: 'task10', component: Task10Component },
  { path: 'finish', component: FinishPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
