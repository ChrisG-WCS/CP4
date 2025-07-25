"use client";

import { useState } from "react";
import { createGame } from "@/app/service/GameService";
import { GameModel } from "@/app/models/GameModel";
import styles from "./GameForm.module.css"; // Correct: Use 'styles' for the imported module

export default function GameForm() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    setMessage(null);
    setIsError(false);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const img = formData.get("img") as string;

    // Added a 'return' here to stop execution if fields are missing
    if (!title || !description || !img) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      setIsError(true);
      setIsPending(false);
      return;
    }

    try {
      const createdGame: GameModel = await createGame(formData);
      setMessage(`Jeu "${createdGame.title}" ajouté avec succès !`);
      // Optional: Clear form fields after successful submission
      // You'd need to add state for each input's value to do this.
    } catch (e: any) {
      console.error("Erreur inattendue lors de la création du jeu :", e);
      setMessage(
        `Une erreur est survenue : ${e.message || "Erreur inconnue."}`
      );
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    // Apply the class from the CSS module to the main container
    <div className={styles.gameFormContainer}>
      <h2>Ajouter un nouveau jeu</h2>
      {message && (
        // Dynamically apply 'success' or 'error' class based on 'isError' state
        <p
          className={`${styles.message} ${
            isError ? styles.error : styles.success
          }`}
        >
          {message}
        </p>
      )}
      <form action={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            disabled={isPending}
          />
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            required
            disabled={isPending}
          ></textarea>
        </div>
        <div>
          <label htmlFor="img">URL de l'image :</label>
          <input type="url" id="img" name="img" required disabled={isPending} />
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? "Ajout en cours..." : "Ajouter le jeu"}
        </button>
      </form>
    </div>
  );
}
