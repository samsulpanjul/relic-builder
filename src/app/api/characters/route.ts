import { client } from "@/src/lib/starrail";
import { JSONParse } from "@/src/utils/helpers";
import { NextResponse } from "next/server";
import { CharacterData } from "starrail.js";

export async function GET() {
  try {
    await client.cachedAssetsManager.cacheDirectorySetup();

    const characters = client.getAllCharacters();
    // const data: CharacterData[] = JSONParse(characters);
    // console.log(`item:`, data?.[0]);

    const data = characters
      .map((char) => {
        const id = String(char.id);

        return {
          id,
          name: char.name.get(),
          icon: char.icon.url,
          miniIcon: char.miniIcon.url,
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

    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
