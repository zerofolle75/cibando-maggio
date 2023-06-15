import { Recipe } from './../models/recipe.model';
import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipe.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl= '/api/recipes';

  constructor(private http:HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    //return of (RECIPES);
    //return this.http.get<Recipe[]>(this.apiBaseUrl + '/');

    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);
  }

  // versione con mock
  //getRecipe(id: number):Observable<Recipe | undefined>{
  //const recipe = RECIPES.find(ricetta => ricetta._id === id);
  //return of (recipe);
  //}


  getRecipe(id: string):Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`);
  }

  getRecipesAsync(){
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);
  }


  deleteRecipe(id: string):Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiBaseUrl}/${id}`);
  }

  insertRecipe(newRicetta: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(`${this.apiBaseUrl}/`,newRicetta);
  }

  }

