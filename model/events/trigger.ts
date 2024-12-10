export enum Triggers {
  Hit,
  Heal,
  ApplyStatus,
  DealDamage,
  Attack,
  BeingAttacked
}

export enum Status {
  Bleed,
  Sickness
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
