import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Power} from '../../model/power';
import {Powers} from '../../data/powers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PathOfAchraGraph';
  powers = new Array<Power|null>(8).fill(null);

  constructor() {
    this.powers[0] = Powers.find(p => p.name == "Toxokinesis")!;
  }

  powerClicked(index: number) {
    this.powers[index] = null!;
  }

  addRandomPower() {
    //TODO: check for duplicates
    let i = this.powers.findIndex(p => !p);
    this.powers[i] = Powers[Math.floor(Math.random() * Powers.length)];
  }
}
