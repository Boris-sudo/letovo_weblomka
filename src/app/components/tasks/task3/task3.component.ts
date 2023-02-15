import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css', '../../app.component.css']
})
export class Task3Component implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute, private placeService : PlaceService) {}

  ngOnInit(): void {
    this.placeService.place = 3;
  }

  checkAnswers(): void {
    // @ts-ignore
    var ans = document.getElementById('answer').value;

    if (ans == 'tron') {
      this.router.navigate(['task4']);
      if (this.placeService.not_finished == this.placeService.place)
        this.placeService.not_finished++;
      this.placeService.used[this.placeService.place] = true;
    } else { // @ts-ignore
      document.getElementById('incorrect').style.display = 'block';
    }
  }
}
