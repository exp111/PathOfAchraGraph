import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Power} from '../../model/power';
import {Powers} from '../../data/powers';
import cytoscape, {ElementDefinition} from 'cytoscape';
import {edge, node} from '../../model/cytoscape/node';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'PathOfAchraGraph';
  powers = new Array<Power | null>(8).fill(null);
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
            'label': 'data(id)',
            "background-color": "data(color)"
          }
        },
        {
          selector: 'edge',
          style: {
            "curve-style": "bezier",
            'label': 'data(id)',
            "target-arrow-shape": "triangle"
          }
        }
      ]
    });
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

  randomizeAllPowers() {
    // clear array
    this.powers.fill(null);
    // fill with random powers
    for (let i = 0; i < this.powers.length; i++) {
      this.addRandomPower();
    }
  }

  getElementsFromPowers(): ElementDefinition[] {
    let elements = [];
    // filter out null powers
    let powers = this.powers.filter(p => p).map(p => p!);
    for (let power of powers) {
      // push node
      elements.push(node(power.name, power.getColor()));
      // push edges for each effect
      for (let effect of power.effects) {
        // check if any other power is affected from this effect
        for (let other of powers) {
          // check if the power has a effect that is triggered
          for (let otherEffect of other.effects) {
            if (otherEffect.isTriggeredBy(effect)) {
              elements.push(edge(effect.toString(), power.name, other.name));
            }
          }
        }
      }
    }
    return elements;
  }

  buildGraph() {
    // clear graph
    this.cytoscape.elements().remove();
    // add new ones
    //TODO: select either power or trigger
    this.cytoscape.add(this.getElementsFromPowers());
    // arrange them
    let layout = this.cytoscape.layout({
      name: "breadthfirst"
    });
    layout.run();
  }
}
