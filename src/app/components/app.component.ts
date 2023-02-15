import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'puzzle'

  constructor(private router: Router, private route: ActivatedRoute) {}

  delete(): void {
    // @ts-ignore
    document.getElementById('start').style.display = 'none';
  }
}
