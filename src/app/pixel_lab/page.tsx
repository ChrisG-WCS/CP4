"use client";
import GameForm from "@/app/components/AddGameForm";
import styles from "./pixel_lab.module.css";

export default function PixelLabPage() {
  return (
    <div className="pixel-lab-container">
      <h1>Bienvenue dans votre Pixel Lab !</h1>
      <h2>C'est ici que tu partages tes jeux du moment !</h2>

      <section className="game-form-section">
        <GameForm />
      </section>
    </div>
  );
}
