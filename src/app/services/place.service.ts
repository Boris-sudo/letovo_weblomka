import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  place: number = 0;
  not_finished: number = 0;
  levels: string[] = [
    "start",
    "task1",
    "task2",
    "task3",
    "task4",
    "15264",
    "task6",
    "task7",
    "task8",
    "task9",
    "task10",
  ];
  used: boolean[] = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  constructor() { }
}
