import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css', '../../app.component.css']
})
export class Task6Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private placeService : PlaceService) {}

  ngOnInit(): void {
    this.placeService.place = 6;
  }

  checkAnswers(): void {
    // @ts-ignore
    var ans = document.getElementById('answer').value;

    if (ans == 'м') {
      this.router.navigate(['task7']);
      if (this.placeService.not_finished == this.placeService.place)
        this.placeService.not_finished++;
      this.placeService.used[this.placeService.place] = true;
    } else { // @ts-ignore
      document.getElementById('incorrect').style.display = 'block';
      this.router.navigate(['task1']);
    }
  }
}
