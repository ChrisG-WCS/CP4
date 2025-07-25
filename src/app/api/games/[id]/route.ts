import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/app/lib/db";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const connection = await getConnection();
  try {
    const gameId = params.id;

    const idAsNumber = parseInt(gameId, 10);
    if (isNaN(idAsNumber)) {
      return NextResponse.json(
        { message: "Invalid game ID provided." },
        { status: 400 }
      );
    }

    const sql = "DELETE FROM game WHERE id = ?";
    const [result] = await connection.execute(sql, [idAsNumber]);

    if ((result as any).affectedRows === 0) {
      return NextResponse.json(
        { message: `Game with ID ${gameId} not found.` },
        { status: 404 }
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error(`Error deleting game:`, error);
    return NextResponse.json(
      { message: "Error deleting game" },
      { status: 500 }
    );
  } finally {
    connection.end();
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const connection = await getConnection();
  try {
    const gameId = params.id;
    const idAsNumber = parseInt(gameId, 10);

    if (isNaN(idAsNumber)) {
      return NextResponse.json(
        { message: "Invalid game ID provided." },
        { status: 400 }
      );
    }

    const sql = "SELECT * FROM game WHERE id = ?";
    const [games] = await connection.query(sql, [idAsNumber]);

    if ((games as any[]).length === 0) {
      return NextResponse.json(
        { message: `Game with ID ${gameId} not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({ game: (games as any[])[0] });
  } catch (error) {
    console.error("Error fetching single game:", error);
    return NextResponse.json(
      { message: "Error fetching single game" },
      { status: 500 }
    );
  } finally {
    connection.end();
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const connection = await getConnection();
  try {
    const gameId = params.id;
    const idAsNumber = parseInt(gameId, 10);

    if (isNaN(idAsNumber)) {
      return NextResponse.json(
        { message: "Invalid game ID provided." },
        { status: 400 }
      );
    }

    const body = await request.json();

    const fieldsToUpdate: string[] = [];
    const values: any[] = [];

    for (const key in body) {
      if (Object.prototype.hasOwnProperty.call(body, key) && key !== "id") {
        fieldsToUpdate.push(`${key} = ?`);
        values.push(body[key]);
      }
    }

    if (fieldsToUpdate.length === 0) {
      return NextResponse.json(
        { message: "No fields provided for update." },
        { status: 400 }
      );
    }

    const sql = `UPDATE game SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;
    values.push(idAsNumber);

    const [result] = await connection.execute(sql, values);

    if ((result as any).affectedRows === 0) {
      return NextResponse.json(
        { message: `Game with ID ${gameId} not found or no changes made.` },
        { status: 404 }
      );
    }

    const [updatedGames] = await connection.query(
      "SELECT * FROM game WHERE id = ?",
      [idAsNumber]
    );

    return NextResponse.json(
      { game: (updatedGames as any[])[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error updating game:`, error);
    return NextResponse.json(
      { message: "Error updating game" },
      { status: 500 }
    );
  } finally {
    connection.end();
  }
}
