import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _InstancesDwarf = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._InstancesDwarf += 1;
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
    return this._InstancesDwarf;
  }
}
