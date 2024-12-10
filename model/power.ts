import {Trigger} from './trigger';

export class Power {
  //TODO: cost, type
  name: string;
  // the effects of this power
  effects: Trigger[];

  constructor(name: string, effects: Trigger[]) {
    this.name = name;
    this.effects = effects;
  }

  toNode() {
    //TODO: toNode
  }
}
