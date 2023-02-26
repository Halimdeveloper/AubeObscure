import { User, UserNameEnum } from "../models/User";
import {
  FamilyEnum,
  PlayerCharacter,
} from "../models/characters/PlayerCharacter";

export function getRandomCharacter(user: User): PlayerCharacter {
  const randomFatherFamily = getRandomFamily();
  const randomMotherFamily = getRandomFamily();
  const randomStats = getRandomStats(randomFatherFamily);
  const toughness = randomStats.toughness;

  let randomCharacter = {
    id: getId(),
    firstName: getRandomFirstName(),
    lastName: randomFatherFamily + "-" + randomMotherFamily,
    health: getHealth(toughness),
    maxHealth: getHealth(toughness),
    family: {
      fatherFamily: randomFatherFamily,
      motherFamily: randomMotherFamily,
    },
    stats: randomStats,
    userName: UserNameEnum[user.name],
  };

  return randomCharacter;
}

function getId(): number {
  // appeler la bdd pour connaître le dernier id
  // id = dernier_id + 1
  return getStatsRange(1, 5000);
}

function getRandomFirstName(): string {
  const NameTable = [
    "Aelith",
    "Balinor",
    "Caelan",
    "Drogath",
    "Eilif",
    "Faelan",
    "Gwendolyn",
    "Hadrian",
    "Idril",
    "Jarek",
    "Kael",
    "Lirien",
    "Maelle",
    "Niamh",
    "Ophelia",
    "Peren",
    "Quinlan",
    "Rhiannon",
    "Sariel",
    "Tarek",
    "Ursa",
    "Valdor",
    "Wynter",
    "Xander",
    "Yara",
    "Zephyr",
    "Aiden",
    "Brigid",
    "Caden",
    "Darian",
    "Eira",
    "Finnian",
    "Giselle",
    "Hestia",
    "Isadora",
    "Jaxon",
    "Kaida",
    "Landon",
    "Maeva",
    "Neveah",
    "Orion",
    "Pallas",
    "Quinn",
    "Rowan",
    "Sable",
    "Theron",
    "Uriah",
    "Vesper",
    "Waverly",
    "Xiomara",
    "Yvaine",
    "Zara",
    "Alaric",
    "Belenus",
    "Cerridwen",
    "Dariana",
    "Eryndor",
    "Freya",
    "Gwydion",
    "Helios",
    "Isolde",
    "Jaeger",
    "Kaida",
    "Lysandra",
    "Morrigan",
    "Nerys",
    "Orlanth",
    "Phelan",
    "Qadira",
    "Riven",
    "Sabine",
    "Thalia",
    "Ulfred",
    "Valtor",
    "Wren",
    "Xander",
    "Ylva",
    "Zephyrus",
    "Asriel",
    "Balthazar",
    "Calantha",
    "Dariana",
    "Eryndor",
    "Fidelma",
    "Ginevra",
    "Helios",
    "Isolde",
    "Jareth",
    "Kaelen",
    "Lysandra",
    "Melanthios",
    "Nerys",
    "Orion",
    "Pyrrhus",
    "Quentyn",
    "Ronan",
    "Seraphina",
    "Taranis",
    "Uther",
    "Valtor",
    "Wren",
    "Xalvadora",
    "Ylva",
    "Zephyrus",
    "Alden",
    "Alistair",
    "Anselm",
    "Aric",
    "Balin",
    "Beorn",
    "Bertram",
    "Caius",
    "Cedric",
    "Clive",
    "Cormac",
    "Darian",
    "Delvin",
    "Drogan",
    "Edric",
    "Elden",
    "Emrys",
    "Eron",
    "Farran",
    "Finlay",
    "Galen",
    "Gareth",
    "Gideon",
    "Hadrian",
    "Halvar",
    "Harlan",
    "Havard",
    "Helios",
    "Ingmar",
    "Jareth",
    "Jaxon",
    "Kael",
    "Kian",
    "Korbin",
    "Leif",
    "Lysander",
    "Magnus",
    "Niall",
    "Odric",
    "Percival",
    "Quinlan",
    "Ragnar",
    "Reidar",
    "Remy",
    "Rian",
    "Ronan",
    "Rowan",
    "Soren",
    "Taran",
    "Thane",
    "Thorin",
    "Tiberius",
    "Tristan",
    "Tybalt",
    "Ulric",
    "Valen",
    "Varian",
    "Viktor",
    "Walden",
    "Wulfric",
    "Xander",
    "Xavier",
    "Yorick",
    "Zarek",
    "Zephyr",
    "Zev",
  ];
  const randomIndex = Math.floor(NameTable.length * Math.random());
  console.log(randomIndex);
  return NameTable[randomIndex];
}

function getRandomLastName(): FamilyEnum {
  return getRandomEnum(FamilyEnum);
}

function getRandomEnum<T>(enumType: any): any {
  const enumValues = Object.values(enumType);
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}

function getRandomFamily(): FamilyEnum {
  return getRandomEnum(FamilyEnum);
}

function getHealth(toughness: number): number {
  return toughness + 5;
}

function getRandomStats(father: FamilyEnum): any {
  const stats = getStatsMatrix();
  console.log(stats[father]);
  console.log(father);

  return {
    agility: getStatsRange(
      stats[father]["agility"].min,
      stats[father]["agility"].max
    ),
    fighting: getStatsRange(
      stats[father]["fighting"].min,
      stats[father]["fighting"].max
    ),
    erudition: getStatsRange(
      stats[father]["erudition"].min,
      stats[father]["erudition"].max
    ),
    influence: getStatsRange(
      stats[father]["influence"].min,
      stats[father]["influence"].max
    ),
    toughness: getStatsRange(
      stats[father]["toughness"].min,
      stats[father]["toughness"].max
    ),
    survival: getStatsRange(
      stats[father]["survival"].min,
      stats[father]["survival"].max
    ),
  };
}

function getStatsMatrix() {
  return {
    Brisefer: {
      agility: { min: 2, max: 4 },
      fighting: { min: 3, max: 5 },
      erudition: { min: 1, max: 3 },
      influence: { min: 1, max: 3 },
      toughness: { min: 3, max: 5 },
      survival: { min: 2, max: 4 },
    },
    Astrebrume: {
      agility: { min: 3, max: 5 },
      fighting: { min: 1, max: 3 },
      erudition: { min: 2, max: 4 },
      influence: { min: 2, max: 4 },
      toughness: { min: 2, max: 4 },
      survival: { min: 1, max: 3 },
    },
    Fulgurine: {
      agility: { min: 4, max: 5 },
      fighting: { min: 4, max: 5 },
      erudition: { min: 1, max: 3 },
      influence: { min: 1, max: 3 },
      toughness: { min: 2, max: 4 },
      survival: { min: 2, max: 4 },
    },
    Clairebene: {
      agility: { min: 1, max: 3 },
      fighting: { min: 1, max: 3 },
      erudition: { min: 4, max: 5 },
      influence: { min: 4, max: 5 },
      toughness: { min: 1, max: 3 },
      survival: { min: 2, max: 4 },
    },
  };
}

function getStatsRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
