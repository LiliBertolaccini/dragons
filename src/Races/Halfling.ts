import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _InstancesHalfling = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._InstancesHalfling += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    return this._InstancesHalfling;
  }
}
