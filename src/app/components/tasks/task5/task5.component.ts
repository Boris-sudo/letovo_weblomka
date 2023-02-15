import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css', '../../app.component.css']
})
export class Task5Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private placeService : PlaceService) {}

  ngOnInit(): void {
    this.placeService.place = 5;
  }

  checkAnswers(): void {
    // @ts-ignore
    var ans = document.getElementById('answer').value;

    if (ans == 'коллаборация') {
      this.router.navigate(['task6']);
      if (this.placeService.not_finished == this.placeService.place)
        this.placeService.not_finished++;
      this.placeService.used[this.placeService.place] = true;
    } else {
      // @ts-ignore
      document.getElementById('incorrect').style.display = 'block';
    }
  }
}

