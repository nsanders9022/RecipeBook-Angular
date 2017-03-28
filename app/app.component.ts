import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>Date: {{month}}/{{day}}/{{year}}</h3>
    <h3>{{title}}</h3>
    <li *ngFor="let ingredient of ingredients">{{ingredient}}</li>
    <p>{{directions}}</p>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  title: string = 'Spaghetti';
  ingredients: string[] = ['2.5 C Sauce', '1 stewed tomato', '1 Box Noodles'];
  directions: string = 'Cook noodles and throw on some sauce and the stewed tomato.';
}
