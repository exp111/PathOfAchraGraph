export enum Triggers {
  Hit,
  Heal,
  ApplyStatus,
  DealDamage,
  Attack,
  BeingAttacked
}

export class TriggerCondition {

  constructor(public trigger: Triggers) {
  }
}

export class Trigger {
  //TODO: how to differentiate between Adjacent/NonAdjacent hit, dmg types
  /**
   *
   * @param trigger how this event is triggered
   * @param effect what this event does
   * @param text text description of the effect
   */
  constructor(public trigger: Triggers,
              public effect: Triggers,
              public text: string) {
  }

  isTriggeredBy(trigger: TriggerCondition) {

  }
}
