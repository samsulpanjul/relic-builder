import { useCharStore, useLightconeStore } from "@/stores/character-store";
import Char from "./Char";
import CreateRelic from "./CreateRelic";
import Lightcone from "./Lightcone";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useShallow } from "zustand/react/shallow";
import Code from "./Code";

export default function Character() {
  const [idChar, rankChar, energy] = useCharStore(useShallow((state) => [state.id, state.rank, state.energy]));
  const [idLc, levelLc, rankLc, promotionLc] = useLightconeStore(useShallow((state) => [state.id, state.level, state.rank, state.promotion]));

  return (
    <>
      <div className="max-w-full min-w-full border-2 rounded-md p-3 max-h-[800px] overflow-auto">
        <div className="pb-5">
          <div className="grid grid-cols-2 divide-x-2">
            <Char />
            <Lightcone />
          </div>
        </div>
        <div className="border-t pt-5">
          <CreateRelic />
        </div>
      </div>
      <div>
        <Dialog>
          <DialogTrigger className="dark:text-white text-black underline font-semibold w-full rounded-md py-3 text-lg">See all commands</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Commands</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              {idChar && (
                <>
                  <div className="bg-slate-300 dark:bg-slate-800 px-3 py-1">
                    /set avatar eidolon {idChar} {rankChar}
                  </div>
                  <div className="bg-slate-300 dark:bg-slate-800 px-3 py-1">/set avatar max_trace {idChar}</div>
                  <div className="bg-slate-300 dark:bg-slate-800 px-3 py-1">/set avatar energy {energy}</div>
                </>
              )}
              {idLc && (
                <div className="bg-slate-300 dark:bg-slate-800 px-3 py-1">
                  /give equipment {idLc} {levelLc} {rankLc} {promotionLc}
                </div>
              )}
              <Code />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
