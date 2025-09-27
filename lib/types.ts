export type Position = "PG" | "SG" | "SF" | "PF" | "C";
export type Team =
  | "ATL" | "BOS" | "BKN" | "CHA" | "CHI" | "CLE" | "DAL" | "DEN" | "DET" | "GSW"
  | "HOU" | "IND" | "LAC" | "LAL" | "MEM" | "MIA" | "MIL" | "MIN" | "NOP" | "NYK"
  | "OKC" | "ORL" | "PHI" | "PHX" | "POR" | "SAC" | "SAS" | "TOR" | "UTA" | "WAS";

export type Player = {
  id: string;
  name: string;
  team: Team;
  pos: Position[];
  age: number;
  adp: number;
  minutes: number;
  statsPerGame: {
    pts: number; reb: number; ast: number; stl: number; blk: number; tpm: number; fg: number; ft: number; tov: number;
  };
  recentGameLog?: { g: number; pts: number; reb: number; ast: number }[];
};