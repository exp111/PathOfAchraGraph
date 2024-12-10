export enum Events {
  Hit,
  Heal
}

export interface Event {
  type: Events;
  effect: string;
  triggers: Events;
}
