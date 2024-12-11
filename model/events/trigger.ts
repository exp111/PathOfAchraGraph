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
  AllyBeingAttacked,
  Kill,
  ExtraAttack
}

export enum Status {
  Bleed,
  Sickness,
  Plague,
  Corrosion,
  Snakeform,
  Entangle,
  Vineform,
  Scorch,
  Inflame,
  Newtform
}

export enum DamageType {
  Blood,
  Poison,
  Fire,
  Pierce,
  Slash,
  Blunt,
  Psychic
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
