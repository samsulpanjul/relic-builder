import { env } from "@/src/env";
import { getMetadata } from "@/src/lib/neonteam/get-metadata";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const metadata = await getMetadata();

    const response = await fetch(
      `${env.NEONTEAM_BASE_URL}/${metadata.CurrentVersion}/textmaps.json`,
    );
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
