import { getGame } from "@/app/lib/getGame";
import { deleteGame } from "@/app/lib/deleteGame";
import { updateGame } from "@/app/lib/updateGame";
import { postGame } from "@/app/lib/postGame";
import { GameModel } from "@/app/models/GameModel";

async function getOneGame(id: string): Promise<GameModel> {
  return await getGame(id);
}

async function deleteOneGame(id: number): Promise<Response> {
  return await deleteGame(id);
}

async function updateOneGame(
  id: string,
  game: Omit<GameModel, "id">
): Promise<Response> {
  return await updateGame(id, game);
}

async function createGame(formData: FormData): Promise<GameModel> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const img = formData.get("img") as string;

  if (!title || !description || !img) {
    throw new Error(
      "Missing required fields: title, description, and image URL."
    );
  }

  const game: Omit<GameModel, "id"> = {
    title,
    description,
    img,
  };

  return await postGame(game);
}

export { getOneGame, deleteOneGame, updateOneGame, createGame };
