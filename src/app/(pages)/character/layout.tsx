import CharacterNavbar from "@/src/components/navbar/character-list.navbar";

export default function CharacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <CharacterNavbar />

      {children}
    </main>
  );
}
