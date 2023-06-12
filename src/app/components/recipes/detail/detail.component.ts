import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  ricetta: Recipe;
  percorsoDifficolta= '../../../../assets/images/difficolta-';

  apiBaseUrl= '/api/recipes';

  constructor(
    private recipeservice: RecipeService,
    private router: Router,
    private activatedroute:ActivatedRoute,
    private http:HttpClient,
    ){}

   ngOnInit(): void {
    this.onGetRecipe();
   }

   //metodo di recupero parametri da url tramite snapshot
   onGetRecipe(): void{
    const id = (this.activatedroute.snapshot.paramMap.get('_id'));

    this.recipeservice.getRecipe(id).subscribe({
      next: (res)=> {
        this.ricetta =res;
      },
      error: (e) => {
        console.log(e)
      }
   })
 }
}
