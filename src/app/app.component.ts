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

  powerClicked(index: number) {
    this.powers[index] = null!;
  }

  addRandomPower() {
    let i = this.powers.findIndex(p => !p);
    // dont add a duplicate one
    let filtered = Powers.filter(p => !this.powers.some(po => po?.name == p.name));
    if (filtered.length == 0) {
      console.log("No more powers.");
      return;
    }
    this.powers[i] = filtered[Math.floor(Math.random() * filtered.length)];
  }

  buildGraph() {

  }
}
