import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css', '../../app.component.css']
})
export class Task7Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private placeService : PlaceService) {}

  ngOnInit(): void {
    this.placeService.place = 7;
  }

  checkAnswers(): void {
    // @ts-ignore
    var ans = document.getElementById('answer').value;

    if (ans == '34615' || ans == '19') {
      this.router.navigate(['task8']);
      if (this.placeService.not_finished == this.placeService.place)
        this.placeService.not_finished++;
      this.placeService.used[this.placeService.place] = true;
    } else { // @ts-ignore
      document.getElementById('incorrect').style.display = 'block';
    }
  }
}

