import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { Task1Component } from "../components/tasks/task1/task1.component";
import { Task2Component } from "../components/tasks/task2/task2.component";
import {StartPageComponent} from "../components/start-page/start-page.component";
import {Task3Component} from "../components/tasks/task3/task3.component";
import {Task4Component} from "../components/tasks/task4/task4.component";
import {Task5Component} from "../components/tasks/task5/task5.component";
import {Task6Component} from "../components/tasks/task6/task6.component";
import {Task7Component} from "../components/tasks/task7/task7.component";
import {Task8Component} from "../components/tasks/task8/task8.component";
import {Task9Component} from "../components/tasks/task9/task9.component";
import {NgOptimizedImage} from "@angular/common";
import {FinishPageComponent} from "../components/finish-page/finish-page.component";
import {Task10Component} from "../components/tasks/task10/task10.component";
import {TopBarComponent} from "../components/top-bar/top-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
    Task7Component,
    Task8Component,
    Task9Component,
    Task10Component,
    FinishPageComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
