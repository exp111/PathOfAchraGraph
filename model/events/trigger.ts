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
  AllyAttack
}

export enum Status {
  Bleed,
  Sickness,
  Plague
}

export enum DamageType {
  Blood,
  Poison
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
