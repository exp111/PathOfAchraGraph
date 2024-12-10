import {BaseTrigger, Status, Triggers} from "../trigger";

export class ApplyStatusTrigger extends BaseTrigger {
  override type = Triggers.ApplyStatus;

  /**
   * @param status status caused by this trigger/this trigger listens to
   */
  constructor(public status: Status) {
    super();
  }

  override isTriggeredBy(trigger: BaseTrigger): boolean {
    return super.isTriggeredBy(trigger) && this.status == (<ApplyStatusTrigger>trigger).status;
  }
}
