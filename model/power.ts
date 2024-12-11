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
    switch (this.type) {
      case PowerType.Poison:
        return "#9ABB00";
      case PowerType.Fire:
        return "#fc2b00";
      case PowerType.Ice:
        return "#90C9E9";
      case PowerType.Blood:
        return "#B20000"
      case PowerType.Astral:
        return "#994AB9";
      case PowerType.Death:
        return "#534700";
      case PowerType.Life:
        return "#008900";
      case PowerType.Lightning:
        return "#006AD8";
      case PowerType.Martial:
        return "#9B643A";
      case PowerType.Psychic:
        return "#BC8E29";
      default:
        return "#666";
    }
  }

  toNode() {
    //TODO: toNode
  }
}
