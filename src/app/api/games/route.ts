import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/app/lib/db";
import { GameModel } from "@/app/models/GameModel";

export async function GET() {
  const connection = await getConnection();
  try {
    const sql = "SELECT * FROM game";
    const [games] = await connection.query(sql);

    return NextResponse.json({ games });
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json(
      { message: "Error fetching games" },
      { status: 500 }
    );
  } finally {
    connection.end();
  }
}

export async function POST(request: NextRequest) {
  const connection = await getConnection();
  try {
    const { title, description, img }: Omit<GameModel, "id"> =
      await request.json();

    if (!title || !description || !img) {
      return NextResponse.json(
        { message: "Missing required fields: title, description, img" },
        { status: 400 }
      );
    }

    const [result] = await connection.execute(
      "INSERT INTO game (title, description, img) VALUES (?, ?, ?)",
      [title, description, img]
    );

    const insertId = (result as any).insertId;
    if (!insertId) {
      throw new Error("Failed to insert game into database.");
    }

    const newGame: GameModel = { id: insertId, title, description, img };
    return NextResponse.json(newGame, { status: 201 });
  } catch (error) {
    console.error("Error creating game:", error);
    return NextResponse.json(
      { message: "Error creating game" },
      { status: 500 }
    );
  } finally {
    connection.end();
  }
}
