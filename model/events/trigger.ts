import {BeingDealtDamageTrigger} from './trigger/beingDealtDamageTrigger';

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
  Learn,
  BeingDealtDamage,
  AllyBeingAttacked
}

export enum Status {
  Bleed,
  Sickness,
  Plague,
  Corrosion,
  Snakeform,
  Entangle,
  Vineform
}

export enum DamageType {
  Blood,
  Poison,
  Fire,
  Pierce
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
