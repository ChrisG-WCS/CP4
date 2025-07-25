import { GameModel } from "@/app/models/GameModel";

export async function getGame(id: string): Promise<GameModel> {
  const response = await fetch(`http://localhost:3000/api/games/${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch game with ID ${id}: ${response.statusText}`
    );
  }

  return response.json();
}
