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

  getColor() {
    //TODO: other colors
    switch (this.type) {
      case PowerType.Poison:
        return "#0F0";
      case PowerType.Fire:
        return "#ffa500";
      case PowerType.Ice:
        return "#00F";
      case PowerType.Blood:
        return "#F00"
      default:
        return "#666";
    }
  }

  toNode() {
    //TODO: toNode
  }
}
