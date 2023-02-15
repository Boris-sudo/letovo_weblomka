import { Component, OnInit } from '@angular/core';
import { PlaceService } from "../../services/place.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public placeService: PlaceService, public router: Router, private route: ActivatedRoute) { }

  check_for_start(): boolean {
    return this.placeService.place != 0;
  }

  go(i:number): void {
    if (i == 2) {
      // @ts-ignore
      document.getElementById('body').style.background = 'blue';
    } else {
      // @ts-ignore
      document.getElementById('body').style.background = 'transparent';
    }
    this.router.navigate([this.placeService.levels[i]]);
  }

  ngOnInit(): void {
  }

}
