import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  ricetta: Recipe;
  percorsoDifficolta= '../../../../assets/images/difficolta-';

  constructor(
    private recipeservice: RecipeService,
    private router: Router,
    private activatedroute:ActivatedRoute,
    ){}

   ngOnInit(): void {
    this.onGetRecipe();
   }

   //metodo di recupero parametri da url tramite snapshot
   onGetRecipe(): void{
    const id = Number(this.activatedroute.snapshot.paramMap.get('_id'));

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
