import {Power, PowerType} from '../model/power';
import {Event} from '../model/events/event';
import {HitTrigger} from '../model/events/trigger/hitTrigger';
import {ApplyStatusTrigger} from '../model/events/trigger/applyStatusTrigger';
import {DamageType, Status} from '../model/events/trigger';
import {DealDamageTrigger} from '../model/events/trigger/dealDamageTrigger';
import {AttackTrigger} from '../model/events/trigger/attackTrigger';
import {BeingAttackedTrigger} from '../model/events/trigger/beingAttackedTrigger';
import {HealTrigger} from '../model/events/trigger/healTrigger';
import {PrayerTrigger} from '../model/events/trigger/prayerTrigger';
import {StandStillTrigger} from '../model/events/trigger/standStillTrigger';
import {GameTurnTrigger} from '../model/events/trigger/gameTurnTrigger';
import {AllyAttackTrigger} from '../model/events/trigger/allyAttackTrigger';
import {SummonTrigger} from '../model/events/trigger/summonTrigger';
import {DivineInterventionTrigger} from '../model/events/trigger/divineInterventionTrigger';
import {LearnTrigger} from '../model/events/trigger/learnTrigger';
import {EntranceTrigger} from '../model/events/trigger/entranceTrigger';
import {BeingDealtDamageTrigger} from '../model/events/trigger/beingDealtDamageTrigger';
import {AllyBeingAttackedTrigger} from '../model/events/trigger/allyBeingAttackedTrigger';

export const Powers: Power[] = [
  // Blood
  new Power("Hemokinesis",
    PowerType.Blood,
    [
      new Event(
        [new HitTrigger()],
        [new ApplyStatusTrigger(Status.Bleed)],
        "5 bleed"),
      new Event(
        [new ApplyStatusTrigger(Status.Bleed)],
        [new DealDamageTrigger(DamageType.Blood)],
        "30 * skill level blood damage")
    ]),
  // Poison
  new Power("Toxokinesis",
    PowerType.Poison,
    [
      new Event(
        [new AttackTrigger()],
        [new DealDamageTrigger(DamageType.Poison)],
        "30 * skill level poison damage"),
      new Event(
        [new HitTrigger()],
        [new ApplyStatusTrigger(Status.Sickness)],
        "5 sickness"),
      new Event(
        [new ApplyStatusTrigger(Status.Sickness)],
        [new DealDamageTrigger(DamageType.Poison)],
        "30 * skill level poison damage")
    ]),
  new Power("Poison Skin",
    PowerType.Poison,
    [
      new Event(
        [new BeingAttackedTrigger()],
        [new ApplyStatusTrigger(Status.Sickness)],
        "2 * skill level sickness"),
      new Event(
        [new DealDamageTrigger(DamageType.Poison)],
        [new HealTrigger()],
        "2 * skill level heal yourself")
    ]),
  new Power("Morbumancy",
    PowerType.Poison,
    [
      new Event(
        [new PrayerTrigger(), new StandStillTrigger()],
        [new ApplyStatusTrigger(Status.Sickness)],
        "10 Sickness")
    ]),
  new Power("Plague Chant",
    PowerType.Poison,
    [
      new Event(
        [new GameTurnTrigger(), new PrayerTrigger()],
        [new DealDamageTrigger(DamageType.Poison, true), new ApplyStatusTrigger(Status.Plague)],
        "25 damage, 10 sickness"),
      new Event(
        [new AllyAttackTrigger()],
        [new ApplyStatusTrigger(Status.Plague)],
        "2 * skill level plague")
    ]),
  new Power("Acidify",
    PowerType.Poison,
    [
      new Event(
        [new AttackTrigger(), new SummonTrigger()],
        [new ApplyStatusTrigger(Status.Corrosion)],
        "5 * skill level sickness"),
      new Event(
        [new DivineInterventionTrigger()],
        [new DealDamageTrigger(DamageType.Poison)],
        "10 * skill level poison")
    ]),
  new Power("Burning Ooze",
    PowerType.Poison,
    [
      new Event(
        [new AllyAttackTrigger()],
        [new DealDamageTrigger(DamageType.Poison), new DealDamageTrigger(DamageType.Fire)],
        "10 * skill level"),
      new Event(
        [new EntranceTrigger(), new LearnTrigger()],
        [new SummonTrigger()],
        "skill level * ooze")
    ]),
  new Power("Oozemancy",
    PowerType.Poison,
    [
      new Event(
        [new SummonTrigger()],
        [new DealDamageTrigger(DamageType.Poison)],
        "20 * number of allied oozes"),
      new Event(
        [new EntranceTrigger(), new LearnTrigger()],
        [new SummonTrigger()],
        "skill level * ooze")
    ]),
  new Power("Poison Familiar",
    PowerType.Poison,
    [
      new Event(
        [new EntranceTrigger(), new LearnTrigger()],
        [new SummonTrigger()],
        "Tsuchigumo"),
      new Event(
        [new ApplyStatusTrigger(Status.Sickness), new ApplyStatusTrigger(Status.Corrosion)],
        [new DealDamageTrigger(DamageType.Poison)],
        "tsuchigumo deals hit * poison")
    ]),
  new Power("Snakeform",
    PowerType.Poison,
    [
      new Event(
        [new ApplyStatusTrigger(Status.Sickness)],
        [new ApplyStatusTrigger(Status.Snakeform)],
        "2 * skill level"),
    ]),
  // Life
  new Power("Vinakinesis",
    PowerType.Life,
    [
      new Event(
        [new AttackTrigger(), new HitTrigger()],
        [new ApplyStatusTrigger(Status.Entangle)],
        "5 entangle"),
      new Event(
        [new ApplyStatusTrigger(Status.Entangle)],
        [new DealDamageTrigger(DamageType.Poison)],
        "30 * skill level"
      )
    ]),
  new Power("Piercing Vines",
    PowerType.Life,
    [
      new Event(
        [new GameTurnTrigger()],
        [new ApplyStatusTrigger(Status.Entangle)],
        "3 * skill level to 2 enemies in 3 range"),
      new Event(
        [new HitTrigger()],
        [new DealDamageTrigger(DamageType.Blood)],
        "if target has entangle, 5 * skill level * entangle stacks")
    ]),
  new Power("Master Entangle",
    PowerType.Life,
    [
      new Event(
        [new BeingDealtDamageTrigger()],
        [new ApplyStatusTrigger(Status.Entangle, true), new ApplyStatusTrigger(Status.Entangle, false)],
        "skill level"),
      new Event(
        [new BeingAttackedTrigger()],
        [new DealDamageTrigger(DamageType.Pierce)],
        "skill level * stacks entangle self"),
    ]),
  new Power("Invigoration",
    PowerType.Life,
    []),
  new Power("Arboromancy",
    PowerType.Life,
    [
      new Event(
        [new AllyAttackTrigger()],
        [new ApplyStatusTrigger(Status.Entangle)],
        "skill level"),
      new Event(
        [new PrayerTrigger()],
        [new SummonTrigger()],
        "skill level"),
    ]),
  new Power("Grove Cult",
    PowerType.Life,
    [
      new Event(
        [new SummonTrigger()],
        [new HealTrigger()],
        "10 * skill level"),
      new Event(
        [new EntranceTrigger(), new LearnTrigger()],
        [new SummonTrigger()],
        "3 * skill level")
    ]),
  new Power("Overgrowth",
    PowerType.Life,
    [
      new Event(
        [new GameTurnTrigger(), new PrayerTrigger()],
        [new SummonTrigger()],
        "skill level"),
      new Event(
        [new AllyBeingAttackedTrigger()],
        [new ApplyStatusTrigger(Status.Entangle)],
        "skill level")
    ]),
  new Power("Vineform",
    PowerType.Life,
    [
      new Event(
        [new SummonTrigger()],
        [new ApplyStatusTrigger(Status.Vineform, true)],
        "2 * skill level")
    ]),
]
