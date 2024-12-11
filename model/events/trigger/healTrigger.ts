import {BaseTrigger, Triggers} from "../trigger";

export class HealTrigger extends BaseTrigger {
  override type = Triggers.Heal;

  /**
   * @param self if it heals yourself
   */
  constructor(public self: boolean = true) {
    super();
  }

  override isTriggeredBy(trigger: BaseTrigger): boolean {
    return super.isTriggeredBy(trigger) && (<HealTrigger>trigger).self == this.self;
  }
}
