import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { take, first, Observable, map } from 'rxjs';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit{

  recipes: Recipe[];
  @Output() messaggio = new EventEmitter();
  @Output() sms = new EventEmitter();
  @Input () pag;

  page=1;
  ricettePerPagina= 4;
  totaleRicette: number;

  ruolo: any;

  totRicette: Recipe[];

  recipes$: Observable<Recipe[]> = this.recipeService.getRecipesAsync().pipe(
    map(res => res.filter(ricettaFiltrata => ricettaFiltrata.difficulty<5)),
    map(res => this.totRicette = res)
    );

    constructor(private recipeService: RecipeService, private modalRecipe:NgbModal, private userService: UserService){}

   ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('user')) !== null){
      this.userService.userRole.subscribe({
        next: res => this.ruolo = res
        })
      }

   this.recipeService.getRecipes().pipe(
    //unsubscribe
    first()
   ).subscribe({
     // il next verrà usato se la chiamata andrà a buon fine

     next: (res) => {
       this.recipes = res;
       this.totaleRicette= res.length;
     },
     error: (err) => {
       // stampo nella console l'errore che restituisce il server
       console.log(err);
     }
   })
 }

  inviaTitolo(titolo: string, diff: number){
    const valoriDaInviare= {
      titolo:titolo,
      diff: diff,
    }
    this.messaggio.emit(valoriDaInviare);
  }

accorciaDescrizione(descrizione): number {
  const lunghezzaMassima = 240;
  if(descrizione.length <= lunghezzaMassima) {
    return lunghezzaMassima;
  } else {
    let ultimaPosizioneSpazio = descrizione.indexOf(' ', lunghezzaMassima);
    return ultimaPosizioneSpazio;
  }
}

open(content: any, titoletto?: string){

  let titolo= titoletto;

  this.modalRecipe.open(content, {ariaLabelledBy: 'modal cancella ricetta ', size: 'lg', centered: true}).result
  .then(
    (res) =>{
      console.log('azione da esguire, ecco il titolo arrivato:',titolo)
    })
    .catch((res) => {
      console.error('nessuna azione da eseguire')
    })
  }

paginate(event){
  event.page = event.page + 1;
  this.page = event.page;
}



}
