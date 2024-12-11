import {BaseTrigger} from './trigger';

export class Event {
  /**
   * @param triggers how this event is triggered (conditions are OR'ed)
   * @param effects what this event does
   * @param text text description of the effect
   */
  constructor(public triggers: BaseTrigger[],
              public effects: BaseTrigger[],
              public text: string) {
  }

  isTriggeredBy(trigger: Event) {
    return this.triggers.some(t => trigger.effects.some(e => t.isTriggeredBy(e)));
  }

  getTriggerString() {
    return this.triggers.map(e => e.toString()).join("||");
  }

  getEffectsString() {
    return this.effects.map(e => e.toString()).join(",");
  }
  toString() {
    return `On ${this.getTriggerString()} -> ${this.getEffectsString()}: ${this.text}`
  }
}
