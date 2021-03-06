import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'Check in with parents once a week',
      count: 5,
    },
    {
      id: 2,
      title: 'Record 2 videos per day',
      count: 2,
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week',
      count: 4,
    },
    {
      id: 4,
      title: 'Write for 20 minutes a day',
      count: 3,
    },
  ];

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit(newHabit: { id: any; title: string; count: number }) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
