"use client";

import { useMemo, useState } from "react";
import { TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { useUserStore } from "@/src/store/use-user.store";
import { generateConfigJson, getExportStatus } from "./utils/helpers";
import IncompleteCardExport from "./components/incomplete-card.export";

const PREVIEW_COUNT = 6;

const ExportPage = () => {
  const characters = useUserStore((state) => state.characters);
  const relics = useUserStore((state) => state.relics);

  const { exportable, incomplete } = useMemo(
    () => getExportStatus(Object.values(characters), relics),
    [characters, relics],
  );
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  const handleExport = () => {
    if (!exportable.length) {
      toast.error("No character is ready to export.");
      return;
    }

    const exportData = generateConfigJson(exportable, relics);

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `config.json`;
    a.click();
    URL.revokeObjectURL(url);

    toast.success(
      `Exported ${exportable.length} character${exportable.length > 1 ? "s" : ""}` +
        (incomplete.length ? `, ${incomplete.length} skipped.` : "."),
    );
  };

  return (
    <div className="wrapper card space-y-4">
      <p className="text-xl font-semibold">Export</p>
      <p>
        * Only characters with a lightcone and all 6 relic slots equipped will
        be exported.
      </p>

      {incomplete.length > 0 && (
        <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-amber-500 font-medium">
              <TriangleAlert className="size-4" />
              <p>
                {incomplete.length} character
                {incomplete.length > 1 ? "s are" : " is"} incomplete and will be
                skipped
              </p>
            </div>
            {incomplete.length > PREVIEW_COUNT && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsViewAllOpen(true)}
              >
                View all ({incomplete.length})
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {incomplete.slice(0, PREVIEW_COUNT).map((char) => (
              <IncompleteCardExport key={char.id} char={char} />
            ))}
          </div>
        </div>
      )}

      <Dialog open={isViewAllOpen} onOpenChange={setIsViewAllOpen}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Incomplete characters</DialogTitle>
            <DialogDescription>
              These characters will be skipped. Click a character to complete
              its lightcone or relics.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[60vh] overflow-y-auto pr-1">
            {incomplete.map((char) => (
              <IncompleteCardExport key={char.id} char={char} />
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Button onClick={handleExport}>
        Download as config.json ({exportable.length})
      </Button>
    </div>
  );
};

export default ExportPage;
