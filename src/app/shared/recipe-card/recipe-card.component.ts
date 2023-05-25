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

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo);
  }

}
