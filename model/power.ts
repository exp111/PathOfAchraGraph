import {Trigger} from './trigger';

export interface Power {
  //TODO: cost, type
  name: string;
  // the effects of this power
  effects: Trigger[];
}
