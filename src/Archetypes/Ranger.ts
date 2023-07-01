import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _InstancesRanger = 0;

  constructor(name: string) {
    super(name);

    Ranger._InstancesRanger += 1;
    this._energyType = 'stamina';
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._InstancesRanger;
  }
}
