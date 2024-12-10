import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Power} from '../../model/power';
import {Powers} from '../../data/powers';
import cytoscape from 'cytoscape';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'PathOfAchraGraph';
  powers = new Array<Power|null>(8).fill(null);
  cytoscape!: cytoscape.Core;

  @ViewChild("cytoscape")
  cytoscapeContainer!: ElementRef;

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

  ngAfterViewInit(): void {
    this.cytoscape = cytoscape({
      container: this.cytoscapeContainer.nativeElement, // container to render in
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        }
      ]
    });
    let a = this.cytoscape.add({data: {id: "a"}});
    this.cytoscape.center(a);
  }
}
