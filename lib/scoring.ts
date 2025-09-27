import { Player } from "./types";

export function fantasyScore(p: Player, weights: Record<string, number>) {
  const s = p.statsPerGame;
  return (
    s.pts * (weights.pts ?? 1) +
    s.reb * (weights.reb ?? 1) +
    s.ast * (weights.ast ?? 1) +
    s.stl * (weights.stl ?? 1.5) +
    s.blk * (weights.blk ?? 1.5) +
    s.tpm * (weights.tpm ?? 1.1) +
    (s.fg - 0.45) * 100 * (weights.fg ?? 0.5) +
    (s.ft - 0.75) * 100 * (weights.ft ?? 0.5) -
    s.tov * (weights.tov ?? 0.7)
  );
}