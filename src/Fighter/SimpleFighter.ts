import Fighter from './Fighter';

export default interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: Fighter | SimpleFighter): void;

  receiveDamage(attackPoints: number): number;
}
