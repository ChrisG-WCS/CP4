import { GameModel } from "@/app/models/GameModel";

export async function updateGame(
  id: string,
  gameData: Omit<GameModel, "id">
): Promise<Response> {
  const response = await fetch(`http://localhost:3000/api/games/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameData),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to update game with ID ${id}: ${response.statusText}`
    );
  }

  return response;
}
