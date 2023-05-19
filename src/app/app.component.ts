import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando-maggio';
  evidenziato = false;
  constructor() {
    console.log('qui sono dentro al costruttore')
  }

  ngOnInit(): void {
console.log('qui sono nell onInit')
  }

  onEvidenziato() {
      this.evidenziato = !this.evidenziato;
  }


}
