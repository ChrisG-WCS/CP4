import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const sql = "SELECT * FROM game ";
  const [games] = await db.query(sql);
  return NextResponse.json({ games });
}

export const POST = async () => {
  return new NextResponse("not authorized");
};
