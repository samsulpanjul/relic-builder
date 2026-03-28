import { client } from "@/src/lib/starrail";
import { JSONParse } from "@/src/utils/helpers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");

  if (!uid)
    return NextResponse.json({ error: "Mana UID-nya kocak?" }, { status: 400 });

  try {
    await client.cachedAssetsManager.cacheDirectorySetup();

    const user = await client.fetchUser(parseInt(uid));

    const cleanData = JSONParse(user);

    return NextResponse.json(cleanData);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
