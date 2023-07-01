import { EnergyType } from '../Energy';

export default interface Fighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: {
    type_: EnergyType;
    amount: number;
  }
  // energy(energy: Energy): {
  //  energy?: {
  //    type_: EnergyType;
  //    amount: number;
  //  }
  // }
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number,
}