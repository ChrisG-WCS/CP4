export async function deleteGame(id: number): Promise<Response> {
  const response = await fetch(`http://localhost:3000/api/games/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to delete game with ID ${id}: ${response.statusText}`
    );
  }

  return response;
}
