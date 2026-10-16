export const runStoreMigrations = (importedData: any) => {
  let currentVersion = importedData.version || 0;
  const migratedData = { ...importedData };

  if (currentVersion === 0) {
    console.log("Migrating data from v0 to v1...");
    const updatedRelics = { ...migratedData.relics };

    Object.keys(updatedRelics).forEach((id) => {
      if (!updatedRelics[id].equipped_by) {
        updatedRelics[id].equipped_by = [];
      }
    });

    Object.entries(importedData.characters || {}).forEach(
      ([charId, char]: [string, any]) => {
        Object.values(char.relics).forEach((relicUid) => {
          if (relicUid && updatedRelics[relicUid as string]) {
            if (
              !updatedRelics[relicUid as string].equipped_by.includes(
                Number(charId),
              )
            ) {
              updatedRelics[relicUid as string].equipped_by.push(
                Number(charId),
              );
            }
          }
        });
      },
    );

    migratedData.relics = updatedRelics;
    currentVersion = 1;
  }

  if (currentVersion === 1) {
    console.log("Migrating data from v1 to v2...");
    const relics = migratedData.relics || {};
    const updatedCharacters = { ...migratedData.characters };

    // clear slots pointing to relics that no longer exist
    Object.entries(updatedCharacters).forEach(
      ([charId, char]: [string, any]) => {
        const updatedSlots = { ...char.relics };
        Object.entries(updatedSlots).forEach(([slot, relicUid]) => {
          if (relicUid && !relics[relicUid as string]) {
            updatedSlots[slot] = null;
          }
        });
        updatedCharacters[charId] = { ...char, relics: updatedSlots };
      },
    );

    migratedData.characters = updatedCharacters;
    currentVersion = 2;
  }

  migratedData.version = currentVersion;
  return migratedData;
};
