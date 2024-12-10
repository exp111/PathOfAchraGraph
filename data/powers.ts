import {Power} from '../model/power';
import {Trigger, Triggers} from '../model/trigger';

export const Powers: Power[] = [
  new Power("Hemokinesis",
    [
      new Trigger(
        Triggers.Hit,
        Triggers.ApplyStatus,
        "5 bleed"),
      new Trigger(
        Triggers.ApplyStatus, // bleed
        Triggers.DealDamage,
        "30 * skill level blood damage")
    ]),

  new Power("Toxokinesis",
    [
      new Trigger(
        Triggers.Attack,
        Triggers.DealDamage, // Poison
        "30 * skill level poison damage"),
      new Trigger(
        Triggers.Hit,
        Triggers.ApplyStatus, // sickness
        "5 sickness"),
      new Trigger(
        Triggers.ApplyStatus, // sickness
        Triggers.DealDamage, // poison
        "30 * skill level poison damage")
    ]),
  new Power("Poison Skin",
    [
      new Trigger(
        Triggers.BeingAttacked,
        Triggers.ApplyStatus, // sickness
        "2 * skill level sickness"),
      new Trigger(
        Triggers.DealDamage, // poison
        Triggers.Heal,
        "2 * skill level heal yourself")
    ])
]
