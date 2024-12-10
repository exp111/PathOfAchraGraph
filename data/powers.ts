import {Power} from '../model/power';
import {Event} from '../model/events/event';
import {HitTrigger} from '../model/events/trigger/hitTrigger';
import {ApplyStatusTrigger} from '../model/events/trigger/applyStatusTrigger';
import {DamageType, Status} from '../model/events/trigger';
import {DealDamageTrigger} from '../model/events/trigger/dealDamageTrigger';
import {AttackTrigger} from '../model/events/trigger/attackTrigger';
import {BeingAttackedTrigger} from '../model/events/trigger/beingAttackedTrigger';
import {HealTrigger} from '../model/events/trigger/healTrigger';

export const Powers: Power[] = [
  new Power("Hemokinesis",
    [
      new Event(
        new HitTrigger(),
        new ApplyStatusTrigger(Status.Bleed),
        "5 bleed"),
      new Event(
        new ApplyStatusTrigger(Status.Bleed),
        new DealDamageTrigger(DamageType.Blood),
        "30 * skill level blood damage")
    ]),

  new Power("Toxokinesis",
    [
      new Event(
        new AttackTrigger(),
        new DealDamageTrigger(DamageType.Poison),
        "30 * skill level poison damage"),
      new Event(
        new HitTrigger(),
        new ApplyStatusTrigger(Status.Sickness),
        "5 sickness"),
      new Event(
        new ApplyStatusTrigger(Status.Sickness),
        new DealDamageTrigger(DamageType.Poison),
        "30 * skill level poison damage")
    ]),
  new Power("Poison Skin",
    [
      new Event(
        new BeingAttackedTrigger(),
        new ApplyStatusTrigger(Status.Sickness),
        "2 * skill level sickness"),
      new Event(
        new DealDamageTrigger(DamageType.Poison), // poison
        new HealTrigger(),
        "2 * skill level heal yourself")
    ])
]
