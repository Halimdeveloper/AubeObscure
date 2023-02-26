export interface Character {
  id: number;
  firstName: string;
  lastName: string;
  health: number;
  maxHealth: number;
  gift?: GiftEnum[];
}

enum GiftEnum {
  Armory1 = "Armure",
  Armory2 = "Armure2",
  Armory3 = "Armure3",
}