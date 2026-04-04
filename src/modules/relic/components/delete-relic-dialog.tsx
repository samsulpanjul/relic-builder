import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { RelicConfigStore } from "@/src/store/types";
import { useUserStore } from "@/src/store/use-user.store";
import { X } from "lucide-react";

interface Props {
  relic: RelicConfigStore;
}

const DeleteRelicDialog = ({ relic }: Props) => {
  const deleteRelic = useUserStore((state) => state.deleteRelic);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          variant="destructive"
          size="icon-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <X className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106">
        <DialogHeader>
          <DialogTitle>Delete Relic</DialogTitle>
          <DialogDescription>
            Are you sure? This will permanently remove the relic from your
            inventory.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button
              variant="destructive"
              onClick={() => deleteRelic(relic.id as string)}
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteRelicDialog;
