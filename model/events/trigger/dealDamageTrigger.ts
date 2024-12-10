import {BaseTrigger, DamageType, Triggers} from "../trigger";

export class DealDamageTrigger extends BaseTrigger {
  override type = Triggers.DealDamage;

  /**
   * @param damageType damage type caused by this trigger/this trigger listens to
   * @param self if the damage is affected to yourself
   */
  constructor(public damageType: DamageType, public self: boolean = false) {
    super();
  }

  override isTriggeredBy(trigger: BaseTrigger): boolean {
    return super.isTriggeredBy(trigger) &&
      this.damageType == (<DealDamageTrigger>trigger).damageType &&
      this.self == (<DealDamageTrigger>trigger).self;
  }
}
