"use client";

import { Button } from "@/src/components/ui/button";
import { runStoreMigrations } from "@/src/store/store-migrations";
import { useUserStore } from "@/src/store/use-user.store";
import { Download, Upload } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

const DatabasePage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    try {
      const currentState = useUserStore.getState();

      const dataStr = JSON.stringify(currentState, null, 2);

      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `relic-builder-${new Date().toISOString().split("T")[0]}.json`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success("Database exported successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to export database.");
    }
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result as string;
        const importedData = JSON.parse(result);

        if (!importedData.relics || !importedData.characters) {
          throw new Error("Invalid database format.");
        }

        const migrationData = runStoreMigrations(importedData);

        useUserStore.setState(migrationData);

        toast.success("Database imported successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Invalid database format.");
      } finally {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="wrapper card space-y-2">
      <h1 className="text-xl font-semibold">Database</h1>
      <div>
        <div className="flex gap-3">
          <input
            type="file"
            accept=".json"
            ref={fileInputRef}
            onChange={handleImport}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="flex-1"
            size={"lg"}
          >
            <Download className="w-4 h-4 mr-2" />
            Import Database
          </Button>

          <Button
            onClick={handleExport}
            className="flex-1"
            variant="secondary"
            size={"lg"}
          >
            <Upload className="w-4 h-4 mr-2" />
            Export Database
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DatabasePage;
