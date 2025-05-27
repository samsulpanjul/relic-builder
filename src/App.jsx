import { ThemeProvider } from "./components/theme-provider";
import { useRelicStore } from "./stores/relic-store";
import { useEffect, useState } from "react";
import DialogAddCharacter from "./components/fragments/DailogAddCharacter";
import Card from "./components/fragments/Card";
import { useConfigCharacterStore } from "./stores/character-store";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const fetchRelics = useRelicStore((state) => state.fetchRelics);
  const config = useConfigCharacterStore((state) => state.config);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetchRelics();
  }, [fetchRelics]);

  useEffect(() => {
    const updated = sort ? [...config].reverse() : config;
    setFiltered(updated);
  }, [config, sort]);

  const handleSearch = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);

    const filteredCharacter = config.filter((char) => char.name.toLowerCase().includes(val));

    setFiltered(filteredCharacter);
  };

  const handleSort = () => {
    setFiltered((prev) => [...prev].reverse());

    setSort((prev) => !prev);
  };

  const configJson = {
    avatar_config: config,
    battle_config: {
      battle_id: 1,
      stage_id: 201012311,
      cycle_count: 30,
      monster_wave: [[4015011]],
      monster_level: 95,
      blessings: [],
    },
  };

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(configJson, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "config.json";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <ThemeProvider>
      <div className="w-10/12 m-auto p-10">
        <div className="flex gap-4 mb-4">
          <DialogAddCharacter />
          <Button onClick={downloadJson} className="font-semibold text-md dark:bg-lime-200 bg-zinc-700">
            Download Config
          </Button>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <Input type="text" placeholder="Search..." onChange={handleSearch} value={search} className="w-64" />
          <Button size="sm" onClick={handleSort}>
            {sort ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-narrow-wide-icon lucide-arrow-up-narrow-wide"
              >
                <path d="m3 8 4-4 4 4" />
                <path d="M7 4v16" />
                <path d="M11 12h4" />
                <path d="M11 16h7" />
                <path d="M11 20h10" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-down-wide-narrow-icon lucide-arrow-down-wide-narrow"
              >
                <path d="m3 16 4 4 4-4" />
                <path d="M7 20V4" />
                <path d="M11 4h10" />
                <path d="M11 8h7" />
                <path d="M11 12h4" />
              </svg>
            )}
          </Button>
        </div>
        <div className="flex gap-4 flex-wrap">{filtered.length > 0 && filtered.map((character) => <Card key={character.id} id={character.id} />)}</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
