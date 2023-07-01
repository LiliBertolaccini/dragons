import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _InstancesNecromancer = 0;

  constructor(name: string) {
    super(name);

    Necromancer._InstancesNecromancer += 1;
    this._energyType = 'mana';
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._InstancesNecromancer;
  }
}
