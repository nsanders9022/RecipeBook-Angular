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
        <li *ngFor="let ingredient of recipe.ingredients">{{ingredient.name}}</li>
        <p>{{recipe.directions}}</p>
        <button (click)="recipe.chooseToEditRecipe = !recipe.chooseToEditRecipe" class="btn btn-info">Edit</button>
      </div>
      <div *ngIf="recipe.chooseToEditRecipe">
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Title</label>
        <input [(ngModel)]="recipe.title">
        <label>Enter Ingredients</label>
        <div *ngFor="let ingredient of recipe.ingredients">
          <input [(ngModel)]="ingredient.name">
        </div>
        <label>Enter Directions</label>
        <input [(ngModel)]="recipe.directions">
        <button (click)="recipe.chooseToEditRecipe = !recipe.chooseToEditRecipe">Done</button>
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
    new Recipe('Spaghetti', [new Ingredient('2.5 C Sauce'), new Ingredient('1 stewed tomato'), new Ingredient('1 Box Noodles')],'Cook noodles and throw on some sauce and the stewed tomato.'),
    new Recipe('Baked Potatoes', [new Ingredient('5 potatoes'), new Ingredient('2 TB Veggie Oil'), new Ingredient('1 tsp Salt')], 'Preheat oven to 375. While preheating, smother potatoes in Veggie oil and sprinkle salt. Put them on the baking sheet and cook for an hour.'),
    new Recipe('Banana and PB', [new Ingredient('1 Banana'), new Ingredient('2 TB Peanut Butter')], 'Put some peanut butter on the banana and enjoy.')
  ];

  // chooseToEditRecipe = null;

  // editRecipe(clickedRecipe) {
  //   this.chooseToEditRecipe = clickedRecipe;
  // }

  finishedEditing() {
    this.chooseToEditRecipe = null;
  }
}

export class Recipe {
  constructor (public title: string, public ingredients: Ingredient[], public directions: string) {}
}

export class Ingredient {
  constructor (public name: string) {}
}
