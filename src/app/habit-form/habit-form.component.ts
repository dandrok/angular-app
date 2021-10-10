import { FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-habit-form',
  template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
  `,
  styles: [],
})
export class HabitFormComponent implements OnInit {
  habitForm: any;
  @Output() addHabit = new EventEmitter<any>();
  constructor(private FormBuilder: FormBuilder) {
    this.habitForm = this.FormBuilder.group({
      title: '',
    });
  }

  onSubmit(newHabit: { id: number; title: string }) {
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
  }

  ngOnInit(): void {}
}
