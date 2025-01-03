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
      // if the trigger is always triggered it doesnt matter if we did the damage, else it is
      (!this.self || this.self == (<DealDamageTrigger>trigger).self);
  }

  override toString(): string {
    return `${super.toString()}(${DamageType[this.damageType]}${this.self?"-self" : ""})`;
  }
}
