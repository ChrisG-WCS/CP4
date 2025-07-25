"use client";

import { useRouter } from "next/navigation";
import styles from "./DeleteGame.module.css";
import { deleteOneGame } from "@/app/service/GameService";

interface DeleteButtonProps {
  gameId: number;
  onDeleteSuccess: () => void;
}

export default function DeleteButton({
  gameId,
  onDeleteSuccess,
}: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    if (window.confirm("Êtes-vous sûr(e) de vouloir supprimer ce jeu ?")) {
      try {
        await deleteOneGame(gameId);
        alert("Jeu supprimé avec succès !");
        onDeleteSuccess();
      } catch (e: unknown) {
        if (e instanceof Error) {
          alert(`Erreur lors de la suppression du jeu :${e.message}`);
        } else {
          alert("Erreur inconnue lors de la suppression du jeu");
        }
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className={`${styles.button} ${styles.deleteButton}`}
    >
      Delete
    </button>
  );
}
