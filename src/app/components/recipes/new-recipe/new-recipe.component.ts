import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit{

    form= new FormGroup ({
    idRicetta: new FormControl('', Validators.required),
    titoloRicetta: new FormControl('', Validators.required),
    descrizioneRicetta: new FormControl('', Validators.required),
    difficolta: new FormControl('', Validators.required),
    pubblicazione: new FormControl('', Validators.required),
    dataPubblicazione: new FormControl('', Validators.required),
  })

  constructor(private recipeService: RecipeService, private router: Router){}


  ngOnInit(): void { }


  onSubmit(){
    console.log(this.form.value);

    const newrecipe = {idRicetta: this.form.value.idRicetta, titoloRicetta: this.form.value.titoloRicetta};

    const recipe = this.form.value;

    this.recipeService.insertRecipe(recipe).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err)
    })
  }
}
