"use client";
import React, { useState, useEffect, useMemo } from "react";
import { BarChart2, Search, ChevronUp, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Player } from "@/lib/types";

type SortKey = keyof Player | "pts" | "reb" | "ast" | "adp";
type SortDirection = "asc" | "desc";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("adp");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  useEffect(() => {
    fetch("/api/players")
      .then(r => r.json())
      .then(({ players }) => setPlayers(players))
      .catch(err => console.error("Failed to fetch players:", err));
  }, []);

  const sortedAndFiltered = useMemo(() => {
    const filtered = players.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    return filtered.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      // Get the values to compare based on sort key
      switch (sortKey) {
        case "pts":
          aValue = a.statsPerGame.pts;
          bValue = b.statsPerGame.pts;
          break;
        case "reb":
          aValue = a.statsPerGame.reb;
          bValue = b.statsPerGame.reb;
          break;
        case "ast":
          aValue = a.statsPerGame.ast;
          bValue = b.statsPerGame.ast;
          break;
        case "adp":
          aValue = a.adp;
          bValue = b.adp;
          break;
        case "name":
          aValue = a.name;
          bValue = b.name;
          break;
        case "team":
          aValue = a.team;
          bValue = b.team;
          break;
        default:
          aValue = a[sortKey as keyof Player];
          bValue = b[sortKey as keyof Player];
      }

      // Handle string sorting
      if (typeof aValue === "string" && typeof bValue === "string") {
        const comparison = aValue.localeCompare(bValue);
        return sortDirection === "asc" ? comparison : -comparison;
      }

      // Handle number sorting
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [players, query, sortKey, sortDirection]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      // If clicking the same column, toggle direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If clicking a new column, set it as sort key with appropriate default direction
      setSortKey(key);
      // For stats, default to descending (highest first), for names/teams ascending
      setSortDirection((["pts", "reb", "ast"] as SortKey[]).includes(key) ? "desc" : "asc");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart2 className="h-6 w-6 text-gray-900 dark:text-gray-100" />
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Fantasy Hoops</span>
            <span className="text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 ml-2">alpha</span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Card className="shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-900 dark:text-gray-100">Player Rankings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search */}
            <div className="flex items-center gap-2 max-w-md">
              <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input 
                value={query} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} 
                placeholder="Search players..." 
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* Players Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">#</th>
                    <SortableHeader sortKey="name" currentSort={sortKey} direction={sortDirection} onSort={handleSort}>
                      Player
                    </SortableHeader>
                    <SortableHeader sortKey="team" currentSort={sortKey} direction={sortDirection} onSort={handleSort}>
                      Team
                    </SortableHeader>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Position</th>
                    <SortableHeader sortKey="adp" currentSort={sortKey} direction={sortDirection} onSort={handleSort}>
                      ADP
                    </SortableHeader>
                    <SortableHeader sortKey="pts" currentSort={sortKey} direction={sortDirection} onSort={handleSort}>
                      PTS
                    </SortableHeader>
                    <SortableHeader sortKey="reb" currentSort={sortKey} direction={sortDirection} onSort={handleSort}>
                      REB
                    </SortableHeader>
                    <SortableHeader sortKey="ast" currentSort={sortKey} direction={sortDirection} onSort={handleSort}>
                      AST
                    </SortableHeader>
                  </tr>
                </thead>
                <tbody>
                  {sortedAndFiltered.length > 0 ? (
                    sortedAndFiltered.map((player: Player, i: number) => (
                      <tr key={player.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50/50 even:dark:bg-gray-800/50 hover:bg-amber-50/40 dark:hover:bg-amber-900/20">
                        <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{i + 1}</td>
                        <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">{player.name}</td>
                        <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{player.team}</td>
                        <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{player.pos.join("/")}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{player.adp.toFixed(1)}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{player.statsPerGame.pts.toFixed(1)}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{player.statsPerGame.reb.toFixed(1)}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{player.statsPerGame.ast.toFixed(1)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-3 py-8 text-center text-gray-500 dark:text-gray-400">
                        {players.length === 0 ? "Loading players..." : "No players found"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="mx-auto max-w-7xl px-4 py-12 text-xs text-gray-500 dark:text-gray-400">
        Built with ❤️ in Next.js & Tailwind.
      </footer>
    </div>
  );
}

// Sortable Header Component
interface SortableHeaderProps {
  sortKey: SortKey;
  currentSort: SortKey;
  direction: SortDirection;
  onSort: (key: SortKey) => void;
  children: React.ReactNode;
}

function SortableHeader({ sortKey, currentSort, direction, onSort, children }: SortableHeaderProps) {
  const isActive = currentSort === sortKey;
  const IconComponent = isActive && direction === "asc" ? ChevronUp : ChevronDown;
  
  return (
    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
      <button
        onClick={() => onSort(sortKey)}
        className="inline-flex items-center gap-1 hover:opacity-80 focus:outline-none text-gray-700 dark:text-gray-300"
      >
        {children}
        <IconComponent 
          className={`h-4 w-4 ${isActive ? "opacity-100" : "opacity-30"}`} 
        />
      </button>
    </th>
  );
}