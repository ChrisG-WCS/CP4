import { GameModel } from "@/app/models/GameModel";

export async function postGame(
  gameData: Omit<GameModel, "id">
): Promise<GameModel> {
  const response = await fetch("http://localhost:3000/api/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameData),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    let errorMessage = `HTTP error! status: ${response.status}`;

    try {
      const errorJson = JSON.parse(errorBody);
      errorMessage = errorJson.message || errorJson.error || errorBody;
    } catch (e) {
      errorMessage = errorBody;
    }

    throw new Error(errorMessage);
  }

  return response.json();
}
