import {BaseTrigger, DamageType, Triggers} from "../trigger";

export class DealDamageTrigger extends BaseTrigger {
  override type = Triggers.DealDamage;

  /**
   * @param damageType damage type caused by this trigger/this trigger listens to
   */
  constructor(public damageType: DamageType) {
    super();
  }

  override isTriggeredBy(trigger: BaseTrigger): boolean {
    return super.isTriggeredBy(trigger) && this.damageType == (<DealDamageTrigger>trigger).damageType;
  }
}
