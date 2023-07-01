import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _InstancesOrc = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._InstancesOrc += 1;
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
    return this._InstancesOrc;
  }
}
