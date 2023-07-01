import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _InstancesElf = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._InstancesElf += 1;
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
    return this._InstancesElf;
  }
}
