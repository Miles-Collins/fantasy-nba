import { NextResponse } from "next/server";
import { MOCK_PLAYERS } from "@/lib/mockPlayers";

export function GET() {
  return NextResponse.json({ players: MOCK_PLAYERS });
}