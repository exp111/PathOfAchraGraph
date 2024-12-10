export enum Triggers {
  Hit,
  Heal,
  ApplyStatus,
  DealDamage,
  Attack,
  BeingAttacked
}

export interface Trigger {
  // how this event is triggered
  trigger: Triggers;
  // what this event does
  effect: Triggers;
  // text description of the effect
  text: string;
  //TODO: how to differentiate between Adjacent/NonAdjacent hit, dmg types
}
