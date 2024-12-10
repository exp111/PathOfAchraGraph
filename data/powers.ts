import {Power} from '../model/power';
import {Triggers} from '../model/trigger';

export const Powers: Power[] = [
  new Power("Hemokinesis",
    [
      {
        trigger: Triggers.Hit,
        effect: Triggers.ApplyStatus,
        text: "5 bleed"
      },
      {
        trigger: Triggers.ApplyStatus, // bleed
        effect: Triggers.DealDamage,
        text: "30 * skill level blood damage"
      }
    ]),

  new Power("Toxokinesis",
    [
      {
        trigger: Triggers.Attack,
        effect: Triggers.DealDamage, // Poison
        text: "30 * skill level poison damage"
      },
      {
        trigger: Triggers.Hit,
        effect: Triggers.ApplyStatus, // sickness
        text: "5 sickness"
      },
      {
        trigger: Triggers.ApplyStatus, // sickness
        effect: Triggers.DealDamage, // poison
        text: "30 * skill level poison damage"
      },
    ]),
  new Power("Poison Skin",
    [
      {
        trigger: Triggers.BeingAttacked,
        effect: Triggers.ApplyStatus, // sickness
        text: "2 * skill level sickness"
      },
      {
        trigger: Triggers.DealDamage, // poison
        effect: Triggers.Heal,
        text: "2 * skill level heal yourself"
      }
    ])
]
