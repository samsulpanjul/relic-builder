import EditRelicButton from "./edit-relic-button";
import RelicCard from "./relic-card";
import { useVirtualizer } from "@tanstack/react-virtual";
import { RelicConfigStore } from "@/src/store/types";
import { Button } from "@/src/components/ui/button";
import { X } from "lucide-react";
import DeleteDialog from "@/src/components/dialog/delete.dialog";
import { useDialog } from "@/src/hooks/use-dialog.hook";
import { useUserStore } from "@/src/store/use-user.store";
import { useState } from "react";

interface Props {
  onSelect?: (relicId: string, type: string) => void;
  withDelete?: boolean;
  parentRef: React.RefObject<HTMLDivElement | null>;
  rows: RelicConfigStore[][];
}

const VirtualizedList = ({ withDelete, onSelect, rows, parentRef }: Props) => {
  const [selectedRelic, setSelectedRelic] = useState<string | null>(null);
  const deleteRelic = useUserStore((state) => state.deleteRelic);
  const deleteDialog = useDialog();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 280,
    overscan: 1,
  });

  const handleDeleteRelic = () => {
    if (selectedRelic) {
      deleteRelic(selectedRelic);
      deleteDialog.setOpen(false);
      setSelectedRelic(null);
    }
  };

  return (
    <div ref={parentRef} className="h-[calc(100vh-312px)] overflow-auto p-2">
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          return (
            <div
              key={virtualRow.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
                paddingBottom: "16px",
              }}
              className="grid grid-cols-7 gap-4"
            >
              {rows[virtualRow.index].map((item) => {
                return (
                  <RelicCard
                    key={item.id}
                    relic={item}
                    onClick={() => onSelect?.(item.id as string, item.type)}
                    renderAction={
                      withDelete && (
                        <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                          <Button
                            variant="destructive"
                            size="icon-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!item.id) return;
                              setSelectedRelic(item.id);
                              deleteDialog.setOpen(true);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <EditRelicButton item={item} />
                        </div>
                      )
                    }
                    showEquippedBy
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      <DeleteDialog
        open={deleteDialog.open}
        onOpenChange={deleteDialog.setOpen}
        onConfirm={handleDeleteRelic}
        title="Delete Relic"
        description="Are you sure? This will permanently remove the relic from your inventory."
      />
    </div>
  );
};

export default VirtualizedList;
