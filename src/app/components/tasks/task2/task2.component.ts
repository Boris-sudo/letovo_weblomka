import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css', '../../app.component.css']
})
export class Task2Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private placeService : PlaceService) {}

  ngOnInit(): void {
    // @ts-ignore
    document.getElementById('body').style.background = 'blue';
    this.placeService.place = 2;
  }

  checkAnswers(): void {
    // @ts-ignore
    var ans = document.getElementById('answer').value;

    if (ans == 1894) {
      // @ts-ignore
      document.getElementById('body').style.background = 'transparent';
      this.router.navigate(['task3']);
      if (this.placeService.not_finished == this.placeService.place)
        this.placeService.not_finished++;
      this.placeService.used[this.placeService.place] = true;
    }
    else { // @ts-ignore
      document.getElementById('incorrect').style.display = 'block';
    }
  }
}
