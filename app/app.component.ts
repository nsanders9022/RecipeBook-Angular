import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>Date: {{month}}/{{day}}/{{year}}</h3>
    <div *ngFor="let recipe of recipes">
      <h3 (click)="recipe.currentRecipe = !recipe.currentRecipe">{{recipe.title}}</h3>
      <div *ngIf="recipe.currentRecipe">
        <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
        <p>{{recipe.directions}}</p>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Spaghetti', ['2.5 C Sauce', '1 stewed tomato', '1 Box Noodles'],'Cook noodles and throw on some sauce and the stewed tomato.'),
    new Recipe('Baked Potatoes', ['5 potatoes', '2 TB Veggie Oil', '1 tsp Salt'], 'Preheat oven to 375. While preheating, smother potatoes in Veggie oil and sprinkle salt. Put them on the baking sheet and cook for an hour.'),
    new Recipe('Banana and PB', ['1 Banana', '2 TB Peanut Butter'], 'Put some peanut butter on the banana and enjoy.')
  ]

  displayRecipe(clickedRecipe) {
    this.currentRecipe = clickedRecipe;
  }
}

export class Recipe {
  constructor (public title: string, public ingredients: string[], public directions: string) {}
}
