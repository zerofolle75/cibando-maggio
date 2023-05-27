import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipes: Recipe[];
  @Output() messaggio = new EventEmitter();

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
}
