import {
  daenerysCharacterData,
  jaimeCharacterData,
  joffreyCharacterData,
} from "../data/index.js";

import { Fighter } from "./Fighter/Fighter.js";
import { King } from "./King/King.js";

const joffrey = new King(joffreyCharacterData, 2);
const jaime = new Fighter(jaimeCharacterData, "sword", 7);
const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);

export const characters = [jaime, joffrey, daenerys];
