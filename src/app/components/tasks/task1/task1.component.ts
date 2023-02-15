import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {interval} from "rxjs";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['../../app.component.css']
})
export class Task1Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private placeService : PlaceService) {}

  ngOnInit(): void {
    this.placeService.place = 1;
  }

  checkAnswers(): void {
    // @ts-ignore
    var ans = document.getElementById('answer').value;

    if (ans == 'чапельник') {
      // @ts-ignore
      document.getElementById('body').style.background = 'blue';
      if (this.placeService.not_finished == this.placeService.place)
        this.placeService.not_finished++;
      this.placeService.used[this.placeService.place] = true;
      this.router.navigate(['task2']);
    } else { // @ts-ignore
      document.getElementById('incorrect').style.display = 'block';
    }
  }
}
