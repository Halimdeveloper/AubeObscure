import { Character } from "./Character";

export interface PlayerCharacter extends Character {
  class: string;
  stats: {
    address: 10;
    fights: 10;
    erudition: 10;
    toughness: 10;
    survival: 10;
  };
}
