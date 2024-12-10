import {Event} from './events/event';

export class Power {
  //TODO: cost, type
  name: string;
  // the effects of this power
  effects: Event[];

  constructor(name: string, effects: Event[]) {
    this.name = name;
    this.effects = effects;
  }

  toNode() {
    //TODO: toNode
  }
}
