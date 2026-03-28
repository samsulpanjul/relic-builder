"use client";

import { Button } from "@/src/components/ui/button";
import { useUserStore } from "@/src/store/use-user.store";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGetRelics } from "./hooks/use-get-relics.hook";

const RelicPage = () => {
  const { data: allRellics } = useGetRelics();
  const relicList = useUserStore((state) => state.relics);
  const router = useRouter();

  return (
    <div className="wrapper p-4 rounded-xl bg-background/50 backdrop-blur-lg mt-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Relic Store</h1>
        <Button
          variant={"secondary"}
          className="font-medium"
          onClick={() => router.push("/relic/create")}
        >
          <Plus /> Create
        </Button>
      </div>
      <div>
        {Object.values(relicList).length === 0 ? (
          <div className="h-96 flex flex-col items-center justify-center gap-2">
            <p className="text-4xl">You don&apos;t have any relics yet.</p>
            <p className="text-xl">Create a new one!</p>
          </div>
        ) : (
          <div>
            <p>Relic list here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelicPage;
