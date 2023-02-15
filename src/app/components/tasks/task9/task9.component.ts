import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css', '../../app.component.css']
})
export class Task9Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private placeService : PlaceService) {}

  show_mes(): void {
    // @ts-ignore
    var ans = document.getElementById('input1').value;

    if (ans == 'рыба') {
      alert(decodeURIComponent('d/1JfSphEdOgjpTNlVHivpogPjdeyADGUgH4GIctnxgn7U/edit?usp=sharing'));
      console.log('https://docs.google.com/document/d/1HMcy-67YsBzzOoF1nHKWHHPmSI1cFv6wwjyEOjqJ4JA/edit?usp=sharing');
    }
  }

  ngOnInit(): void {
    this.placeService.place = 9;
  }

  checkAnswers(): void {
    // @ts-ignore
    var ans = document.getElementById('answer').value;

    if (ans == 'парафин') {
      this.router.navigate(['task10']);
      if (this.placeService.not_finished == this.placeService.place)
        this.placeService.not_finished++;
      this.placeService.used[this.placeService.place] = true;
    } else { // @ts-ignore
      document.getElementById('incorrect').style.display = 'block';
    }
  }
}
