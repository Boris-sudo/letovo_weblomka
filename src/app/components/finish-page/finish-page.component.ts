import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PlaceService } from "../../services/place.service";

@Component({
  selector: 'app-finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.css']
})
export class FinishPageComponent implements OnInit {
  correct: number = 0;
  random_num: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService) {}

  ngOnInit(): void {
    for (let i = 1; i < 11; i++) {
      if (this.placeService.used[i])
        this.correct++;
    }
    this.random_num = Math.floor(Math.random() * 4);
  }

}
