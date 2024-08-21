export interface UnitRawInterface {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: {
    Food: number;
    Wood: number;
    Gold: number;
  };
  build_time: number;
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: number;
  attack: number;
  armor: string;
  attack_bonus: string[];
  blast_radius: number;
  accuracy: string;
}
