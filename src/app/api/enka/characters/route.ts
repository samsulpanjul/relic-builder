import { client } from "@/src/lib/starrail";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    await client.cachedAssetsManager.cacheDirectorySetup();

    const characters = client.getAllCharacters();

    const data = characters
      .map((char) => {
        const id = String(char.id);

        return {
          id,
          name: char.name.get(),
          icon: char.icon.url,
          miniIcon: char.miniIcon.url,
          shopItemIcon: char.shopItemIcon.url,
          splashImage: char.splashImage.url,
          sideIcon: char.sideIcon.url,
          rarity: char.stars,
          element: {
            name: char.combatType.name.get(),
            id: char.combatType.id,
            icon: char.combatType.icon.url,
            bigIcon: char.combatType.bigIcon.url,
          },
          path: {
            name: char.path.name.get(),
            id: char.path.id,
            icon: char.path.icon.url,
            smallIcon: char.path.smallIcon.url,
          },
        };
      })
      .reverse();

    if (!id) {
      return NextResponse.json(data);
    }

    const char = data.find((item) => item.id === id);
    return NextResponse.json(char);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
