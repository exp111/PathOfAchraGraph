export enum Triggers {
  Hit,
  Heal,
  ApplyStatus,
  DealDamage,
  Attack,
  BeingAttacked,
  Prayer,
  StandStill,
  Block,
  ShrugOff,
  GameTurn,
  AllyAttack,
  Summon,
  DivineIntervention,
  Entrance,
  Learn
}

export enum Status {
  Bleed,
  Sickness,
  Plague,
  Corrosion,
  Snakeform
}

export enum DamageType {
  Blood,
  Poison,
  Fire
}

export abstract class BaseTrigger {
  type!: Triggers;

  isTriggeredBy(trigger: BaseTrigger) {
    return this.type == trigger.type;
  }

  toString() {
    return Triggers[this.type];
  }
}
