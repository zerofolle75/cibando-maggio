import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})

export class NewRecipeComponent {


  percorsoDifficolta= '../../../../assets/images/difficolta-';

  editor = ClassicEditor;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'codeBlock',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en',
};

    form= new FormGroup ({
    titoloRicetta: new FormControl('', Validators.required),
    descrizioneRicetta: new FormControl('', Validators.required),
    imgNewRecipe: new FormControl('', Validators.required),
  })

  constructor(private recipeService: RecipeService, private router: Router){}

  onSubmit(){
    console.log(this.form.value);

    const newRicetta = {
      title: this.form.value.titoloRicetta,
      description: this.form.value.descrizioneRicetta,
      difficulty: 3,
      image: this.form.value.imgNewRecipe,

    };



    this.recipeService.insertRecipe(newRicetta).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['home']);
      },
      error: (err) => console.log(err)
    })
  }
}
