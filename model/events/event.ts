import {BaseTrigger} from './trigger';

export class Event {
  //TODO: how to differentiate between Adjacent/NonAdjacent hit, dmg types
  /**
   * @param trigger how this event is triggered
   * @param effect what this event does
   * @param text text description of the effect
   */
  constructor(public trigger: BaseTrigger,
              public effect: BaseTrigger,
              public text: string) {
  }

  isTriggeredBy(trigger: Event) {
    return this.trigger.isTriggeredBy(trigger.effect);
  }
}
