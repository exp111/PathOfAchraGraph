import {BaseTrigger, Status, Triggers} from "../trigger";

export class ApplyStatusTrigger extends BaseTrigger {
  override type = Triggers.ApplyStatus;

  /**
   * @param status status caused by this trigger/this trigger listens to
   * @param self if the damage is affected to yourself
   */
  constructor(public status: Status, public self: boolean = false) {
    super();
  }

  override isTriggeredBy(trigger: BaseTrigger): boolean {
    return super.isTriggeredBy(trigger) &&
      this.status == (<ApplyStatusTrigger>trigger).status &&
      // if the trigger is always triggered it doesnt matter if we did the damage, else it is
      (!this.self || this.self == (<ApplyStatusTrigger>trigger).self);
  }
}

