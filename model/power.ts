import {Event} from './events/event';

export enum PowerType {
  Poison,
  Ice,
  Martial,
  Fire,
  Lightning,
  Death,
  Life,
  Blood,
  Astral,
  Psychic
}
export class Power {
  //TODO: cost

  /**
   * @param name name of the power
   * @param type type of the power
   * @param effects effects of the power
   */
  constructor(public name: string, public type: PowerType, public effects: Event[]) {
    this.name = name;
    this.effects = effects;
  }

  toNode() {
    //TODO: toNode
  }
}
