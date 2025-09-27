import { MOCK_PLAYERS } from "@/lib/mockPlayers";

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = MOCK_PLAYERS.find((p) => p.id === params.id);
  if (!player) return <div className="p-6">Player not found.</div>;
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">{player.name}</h1>
      <p className="text-zinc-600">{player.team} · {player.pos.join("/")}</p>
      {/* Add richer profile here (charts, splits, news) */}
    </div>
  );
}