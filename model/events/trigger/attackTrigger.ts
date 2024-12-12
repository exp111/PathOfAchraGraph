import {BaseTrigger, Triggers} from "../trigger";

export class AttackTrigger extends BaseTrigger {
  override type = Triggers.Attack;

  /**
   * @param extra is this an extra attack
   */
  constructor(public extra: boolean = false) {
    super();
  }
}
